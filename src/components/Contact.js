import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  static protoTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isrequired,
    phone: PropTypes.string.isRequired
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4> {name}</h4>
        <ul>
          <li>{email}</li>
          <li> {phone}</li>
        </ul>
      </div>
    );
  }
}
Contact.protoTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isrequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
