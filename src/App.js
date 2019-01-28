import React, { Component } from "react";
import { Provider } from "./context";

import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
