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

      educations: [],
    };
  }

  handleChange = (e) => {
    const key = e.target.getAttribute("data-key");
    this.setState({ [key]: e.target.value });
  };

  handleEducationChange = (e) => {};

  render() {
    const { fullName, email, phoneNumber, address, educations } = this.state;

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
            <button
              className="expand-education-details"
              type="button"
              onClick={() => {
                const toggleElems = document.querySelectorAll(".toggle");
                toggleElems.forEach((elem) => elem.classList.toggle("closed"));
                const educationInputs =
                  document.querySelector(".education-inputs");
                educationInputs.classList.add("closed");
              }}
            >
              <h2 className="education-details-header">
                <i className="fa-solid fa-graduation-cap" />
                Education
              </h2>
              <i className="fa-solid fa-chevron-up chevron closed toggle"></i>
            </button>

            <div className="education-inputs closed toggle">
              {educations.map((education) => (
                <EducationDetails
                  onChange={this.handleEducationChange}
                  degree={education.degree}
                  schoolName={education.schoolName}
                  location={education.location}
                  startDate={education.startDate}
                  endDate={education.endDate}
                />
              ))}
            </div>

            <button
              className="add-education closed toggle"
              type="button"
              onClick={(e) => {
                const object = {
                  degree: "",
                  schoolName: "",
                  location: "",
                  startDate: "",
                  endDate: "",
                };
                this.setState({
                  educations: [...educations, object],
                });
              }}
            >
              <h4>
                <i className="fa-solid fa-plus" />
                Education
              </h4>
            </button>
          </div>
        </form>
        <Resume
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
          educations={educations}
        />
      </div>
    );
  }
}

export default App;
