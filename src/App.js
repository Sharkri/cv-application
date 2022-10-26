import React, { Component } from "react";
import "./styles/App.css";
import PersonalDetails from "./components/PersonalDetails";
import AddEducationSection from "./components/AddEducationSection";
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
      prevState: "",
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
      isCollapsed: false,
      isHidden: false,
      id: uniqid(),
    };
    this.setState({ prevState: Object.assign({}, education) });
    this.setState({
      educations: [...educations, education],
    });
  };

  toggleEducationClosed = () => {
    const { isEducationClosed } = this.state;
    this.setState({
      isEducationClosed: isEducationClosed ? "" : "closed",
    });
  };

  cancelEducationForm = (e) => {
    const { educations } = this.state;
    const id = e.target.closest(".form").id;
    this.setState({
      educations: educations.map((education) => {
        if (education.id === id) {
          education = this.state.prevState;
          education.isCollapsed = true;
        }
        return education;
      }),
    });
  };

  setItem = (e, key) => {
    const { educations } = this.state;
    const id = e.target.closest(".form").id;
    this.setState({
      educations: educations.map((education) => {
        if (education.id === id) {
          this.setState({ prevState: Object.assign({}, education) });
          education[key] = !education[key];
        }
        return education;
      }),
    });
  };

  toggleFormOpen = (e) => this.setItem(e, "isCollapsed");
  toggleHidden = (e) => this.setItem(e, "isHidden");

  render() {
    const {
      fullName,
      email,
      phoneNumber,
      address,
      educations,
      isEducationClosed,
    } = this.state;

    return (
      <div className="app">
        <div className="form-container">
          <PersonalDetails
            onChange={this.handleChange}
            fullName={fullName}
            email={email}
            phoneNumber={phoneNumber}
            address={address}
          />

          <AddEducationSection
            educations={educations}
            isClosed={isEducationClosed}
            onChange={this.handleEducationChange}
            createForm={this.createEducationForm}
            toggleClosed={this.toggleEducationClosed}
            onCancel={this.cancelEducationForm}
            onSave={this.toggleFormOpen}
            onHide={this.toggleHidden}
          />
        </div>

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
