import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showContactInfo: true
  };

  onShowClick = () => {
    console.log("clicked");
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = (dispatch, id) => {
    console.log("working");
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { id, name, email, phone } = this.props.contact;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {" "}
                {name}{" "}
                <i
                  className="fas fa-sort-down"
                  onClick={this.onShowClick}
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, dispatch, id)}
                />
              </h4>
              {this.state.showContactInfo && (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item"> {phone}</li>
                </ul>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.protoTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
