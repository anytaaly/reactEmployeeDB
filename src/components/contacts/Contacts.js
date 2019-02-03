import React, { Component } from "react";
import { Consumer } from "../../context";
import Contact from "./Contact";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div>
              <h1 className=" mb-4 mt-4">Contact List</h1>
              {value.contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
