import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "Jdoe@gmail.com",
          phone: "555-555-5555"
        },
        {
          id: 2,
          name: "Karen Williams",
          email: "kwilliams@gmail.com",
          phone: "222-222-2222"
        },
        {
          id: 3,
          name: "Henry Johnson",
          email: "kjohnson@gmail.com",
          phone: "333-333-3333"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}
export default Contacts;
