import React, { Component } from "react";
import { Provider } from "./context";

import Contacts from "./components/Contacts";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
