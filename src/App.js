import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="JohnDoe" email="jdoe@gmail.com" phone="555-555-5555" />
        <Contact name="Rachel" email="rdoe@gmail.com" phone="555-555-5555" />
        <Contact name="Kareem" email="kdoe@gmail.com" phone="555-555-5555" />
      </div>
    );
  }
}

export default App;
