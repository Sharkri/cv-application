import React, { Component } from "react";
import "./styles/App.css";
import PersonalDetails from "./components/PersonalDetails";
import EducationForm from "./components/EducationForm";
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
    };
  }

  handleChange = (e) => {
    const key = e.target.getAttribute("data-key");
    this.setState({ [key]: e.target.value });
  };

  handleEducationChange = (e) => {
    const key = e.target.getAttribute("data-key");
    const id = e.target.closest(".education-inputs").id;
    const { educations } = this.state;
    const modified = educations.map((education) => {
      if (education.id === id) education[key] = e.target.value;
      return education;
    });
    this.setState({ educations: modified });
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

          <div className="add-education-section container closed">
            <button
              className="expand-add-education-section"
              type="button"
              onClick={() => {
                const toggleElems = document.querySelectorAll(".toggle");
                toggleElems.forEach((elem) => elem.classList.toggle("closed"));
              }}
            >
              <h2 className="add-education-header">
                <i className="fa-solid fa-graduation-cap" />
                Education
              </h2>
              <i className="fa-solid fa-chevron-up chevron closed toggle"></i>
            </button>

            <div className="main-education-content closed toggle">
              <div className="education-input-forms">
                {educations.map((education) => (
                  <EducationForm
                    onChange={this.handleEducationChange}
                    degree={education.degree}
                    schoolName={education.schoolName}
                    location={education.location}
                    startDate={education.startDate}
                    endDate={education.endDate}
                    key={education.id}
                    id={education.id}
                  />
                ))}
              </div>
              <button
                className="create-education-form"
                type="button"
                onClick={() => {
                  const object = {
                    degree: "",
                    schoolName: "",
                    location: "",
                    startDate: "",
                    endDate: "",
                    id: uniqid(),
                  };
                  this.setState({
                    educations: [...educations, object],
                  });
                }}
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
