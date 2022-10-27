import React, { Component } from "react";
import "./styles/App.css";
import PersonalDetails from "./components/PersonalDetails";
import AddEducationSection from "./components/AddEducationSection";
import AddExperienceSection from "./components/AddExperienceSection";
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
      experiences: [],
      isEducationClosed: "closed",
      prevState: "",
    };
  }

  setPrevState = (prevState) =>
    this.setState({ prevState: Object.assign({}, prevState) });

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
    this.setPrevState(education);

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
    console.log(this.state.prevState);

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

  toggleValue = (e, key) => {
    const form = e.target.closest(".form");
    const { id } = form;
    const arrayName = form.getAttribute("data-array-name");
    const array = this.state[arrayName];

    this.setState({
      [arrayName]: array.map((object) => {
        if (object.id === id) {
          this.setPrevState(object);
          object[key] = !object[key];
        }

        return object;
      }),
    });
  };

  toggleCollapsed = (e) => this.toggleValue(e, "isCollapsed");
  toggleHidden = (e) => this.toggleValue(e, "isHidden");
  removeForm = (e) => {
    const { educations } = this.state;
    const id = e.target.closest(".form").id;
    console.log(educations.filter((education) => education.id !== id));
    this.setState({
      educations: educations.filter((education) => education.id !== id),
    });
  };

  render() {
    const {
      fullName,
      email,
      phoneNumber,
      address,
      educations,
      experiences,
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
            toggleCollapsed={this.toggleCollapsed}
            onHide={this.toggleHidden}
            onRemove={this.removeForm}
          />

          <AddExperienceSection
            experiences={experiences}
            isClosed={isEducationClosed}
            onChange={this.handleEducationChange}
            createForm={this.createEducationForm}
            toggleClosed={this.toggleEducationClosed}
            onCancel={this.cancelEducationForm}
            toggleCollapsed={this.toggleCollapsed}
            onHide={this.toggleHidden}
            onRemove={this.removeForm}
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
