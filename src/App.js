import React, { Component } from "react";
import "./styles/App.css";
import PersonalDetails from "./components/PersonalDetails";
import EducationForms from "./components/EducationForms";
import Resume from "./components/Resume";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",

      educations: [],
      isEducationClosed: "closed",
    };
  }

  handleChange = (e) => {
    const key = e.target.getAttribute("data-key");
    this.setState({ [key]: e.target.value });
  };

  handleEducationChange = (e) => {
    const key = e.target.getAttribute("data-key");
    const id = e.target.closest(".education-form").id;
    const { educations } = this.state;
    const modified = educations.map((education) => {
      if (education.id === id) education[key] = e.target.value;
      return education;
    });
    this.setState({ educations: modified });
  };

  createEducationForm = () => {
    const { educations } = this.state;
    const education = {
      degree: "",
      schoolName: "",
      location: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
    };
    this.setState({
      educations: [...educations, education],
    });
  };

  render() {
    const { fullName, email, phoneNumber, address, educations } = this.state;

    return (
      <div className="app">
        <form action="">
          <PersonalDetails
            onChange={this.handleChange}
            fullName={fullName}
            email={email}
            phoneNumber={phoneNumber}
            address={address}
          />

          <div className="add-education-section">
            <button
              className="expand-add-education-section"
              type="button"
              onClick={() => {
                const { isEducationClosed } = this.state;
                this.setState({
                  isEducationClosed: isEducationClosed ? "" : "closed",
                });
              }}
            >
              <h2 className="add-education-header">
                <i className="fa-solid fa-graduation-cap" />
                Education
              </h2>
              <i
                className={`fa-solid fa-chevron-up chevron ${this.state.isEducationClosed}`}
              />
            </button>

            <div
              className={`main-education-content ${this.state.isEducationClosed}`}
            >
              <EducationForms
                educations={educations}
                onChange={this.handleEducationChange}
              />

              <button
                className="create-education-form"
                type="button"
                onClick={this.createEducationForm}
              >
                <h4 className="button-content">
                  <i className="fa-solid fa-plus" />
                  Education
                </h4>
              </button>
            </div>
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
