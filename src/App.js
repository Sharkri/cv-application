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
      location: "",
      startDate: "",
      endDate: "",
    };
  }

  handleChange = (e) => {
    const key = e.target.getAttribute("data-key");
    this.setState({ [key]: e.target.value });
  };

  render() {
    const {
      fullName,
      email,
      phoneNumber,
      address,
      degree,
      schoolName,
      location,
      startDate,
      endDate,
    } = this.state;

    return (
      <div className="app">
        <form action="">
          <div className="personal-details-inputs container">
            <h2>Personal Details</h2>
            <PersonalDetails
              onChange={this.handleChange}
              fullName={fullName}
              email={email}
              phoneNumber={phoneNumber}
              address={address}
            />
          </div>
          <div className="education-details-container container">
            <button className="expand-education-details" type="button">
              <h2 className="education-details-header">
                <i className="fa-solid fa-graduation-cap" />
                Education
              </h2>
              <i class="fa-solid fa-chevron-down"></i>
            </button>

            <div className="education-inputs closed">
              <EducationDetails
                onChange={this.handleChange}
                degree={degree}
                schoolName={schoolName}
                location={location}
                startDate={startDate}
                endDate={endDate}
              />
            </div>
          </div>
        </form>
        <Resume
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
          degree={degree}
          schoolName={schoolName}
          location={location}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
    );
  }
}

export default App;
