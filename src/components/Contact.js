import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: true
  };

  onShowClick = () => {
    console.log("clicked");
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = () => {
    console.log("onShow Clicked");
  };
  render() {
    const { name, email, phone } = this.props.contact;
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
            onClick={this.onDeleteClick}
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
  }
}
Contact.protoTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
