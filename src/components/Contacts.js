import React, { Component } from "react";
import { Consumer } from "../context";
import Contact from "./Contact";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div>
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
