import React, { Component } from "react";
import "./styles/App.css";
import PersonalDetails from "./components/PersonalDetails";
import Resume from "./components/Resume";

class App extends Component {
  render() {
    return (
      <div className="app">
        <form action="">
          <PersonalDetails />
        </form>
        <Resume />
      </div>
    );
  }
}

export default App;
