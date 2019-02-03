import React, { Component } from "react";

import { Consumer } from "../../context";
import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";

import "./AddContact.css";

class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      avatar: "",
      errors: {}
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    //Check for Errors Validation
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };
    dispatch({ type: "ADD_CONTACT", payload: newContact });
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: ""
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <h1 className="card-header my-header"> Add Contact </h1>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    name="name"
                    type="text"
                    label="Name"
                    value={name}
                    onChange={this.onChange}
                    placeholder="Enter Full Name Here"
                    error={errors.name}
                  />

                  <TextInputGroup
                    name="email"
                    type="email"
                    label="Email"
                    value={email}
                    onChange={this.onChange}
                    placeholder="Enter Email Here"
                    error={errors.email}
                  />

                  <TextInputGroup
                    name="phone"
                    type="text"
                    label="Phone"
                    value={phone}
                    onChange={this.onChange}
                    placeholder="Enter Contact Details Here"
                    error={errors.phone}
                  />

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block"
                    style={{ backgroundColor: "#574b97", color: "#fff" }}
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
