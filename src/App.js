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

  personalDetailsChange = (e) => {
    const key = e.target.getAttribute("data-key");
    const obj = { ...this.state.personalDetails };
    obj[key] = e.target.value;
    this.setState({ personalDetails: obj });
  };

  render() {
    const { personalDetails } = this.state;
    return (
      <div className="app">
        <form action="">
          <PersonalDetails
            onChange={this.personalDetailsChange}
            fullName={personalDetails.fullName}
            email={personalDetails.email}
            phoneNumber={personalDetails.phoneNumber}
            address={personalDetails.address}
          />
        </form>
        <Resume personalDetails={personalDetails} />
      </div>
    );
  }
}

export default App;
