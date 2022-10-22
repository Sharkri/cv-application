import React, { Component } from "react";
import "./styles/App.css";
import PersonalDetails from "./components/PersonalDetails";
import Resume from "./components/Resume";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalDetails: {
        fullName: "",
        email: "beans@beans.com",
        phoneNumber: "",
        address: "",
      },
    };
  }
  personalDetailsChange = (e) => {};

  render() {
    const { personalDetails } = this.state;
    return (
      <div className="app">
        <form action="">
          <PersonalDetails onChange={this.personalDetailsChange} />
        </form>
        <Resume personalDetails={personalDetails} />
      </div>
    );
  }
}

export default App;
