import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import "./Contact.scss";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    console.log("clicked");
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = async (dispatch, id) => {
    console.log("working");
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { id, name, email, phone, avatar } = this.props.contact;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div
              className="card card-body mb-3"
              style={{ backgroundColor: "#574b97" }}
            >
              <h4 className="employee">
                <i
                  class="far fa-user"
                  style={{ color: "#42d8f8", paddingRight: "15px" }}
                />
                {name}{" "}
                <i
                  className="fas fa-sort-down"
                  onClick={this.onShowClick}
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-trash-alt"
                  style={{
                    cursor: "pointer",
                    float: "right"
                  }}
                  onClick={this.onDeleteClick.bind(this, dispatch, id)}
                />
              </h4>
              {this.state.showContactInfo && (
                <ul
                  className="list-group"
                  style={{ border: "#80779d 1px solid", borderRadius: "5px" }}
                >
                  <li className="list-group-item">
                    <i
                      className="far fa-envelope"
                      style={{ paddingRight: "10px" }}
                    />
                    {email}
                  </li>
                  <li className="list-group-item ">
                    {" "}
                    <i
                      className="fas fa-headphones-alt"
                      style={{ paddingRight: "10px" }}
                    />
                    {phone}
                  </li>
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
