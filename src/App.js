import React, { Component } from "react";
import "./styles/App.css";
import PersonalDetails from "./components/PersonalDetails";
import EducationDetails from "./components/EducationDetails";
import Resume from "./components/Resume";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",

      degree: "",
      schoolName: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
    };
  }

  handleChange = (e) => {
    const key = e.target.getAttribute("data-key");
    this.setState({ [key]: e.target.value });
  };

  render() {
    const { fullName, email, phoneNumber, address } = this.state;
    return (
      <div className="app">
        <form action="">
          <h2>Personal Details</h2>
          <PersonalDetails
            onChange={this.handleChange}
            fullName={fullName}
            email={email}
            phoneNumber={phoneNumber}
            address={address}
          />
          <h2>Education</h2>
          <EducationDetails />
        </form>
        <Resume
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
        />
      </div>
    );
  }
}

export default App;
