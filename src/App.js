import React, { Component } from "react";
import "./styles/App.css";
import PersonalDetails from "./components/personal-info/PersonalDetails";
import AddEducationSection from "./components/education/AddEducationSection";
import AddExperienceSection from "./components/experience/AddExperienceSection";
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
      sectionOpen: "",
      prevState: "",
    };
  }

  setPrevState = (prevState) =>
    this.setState({ prevState: Object.assign({}, prevState) });

  handleChange = (e) => {
    const { key } = e.target.dataset;
    this.setState({ [key]: e.target.value });
  };

  handleSectionChange = (e) => {
    const { key } = e.target.dataset;
    const form = e.target.closest(".section-form");
    const { id } = form;
    const { arrayName } = form.dataset;
    const array = this.state[arrayName];

    this.setState({
      [arrayName]: array.map((obj) => {
        if (obj.id === id) obj[key] = e.target.value;
        return obj;
      }),
    });
  };

  createForm = (arrayName, object) => {
    this.setPrevState(object);
    const array = this.state[arrayName];
    this.setState({
      [arrayName]: [...array, object],
    });
  };

  createEducationForm = () => {
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
    this.createForm("educations", education);
  };

  createExperienceForm = () => {
    const experience = {
      companyName: "",
      positionTitle: "",
      location: "",
      description: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
      id: uniqid(),
    };
    this.createForm("experiences", experience);
  };

  setOpen = (sectionName) => this.setState({ sectionOpen: sectionName });
  cancelForm = (e) => {
    const form = e.target.closest(".section-form");
    const { id } = form;
    const { arrayName } = form.dataset;
    const array = this.state[arrayName];

    this.setState({
      [arrayName]: array.map((object) => {
        if (object.id === id) {
          // Revert back to previous state
          object = this.state.prevState;
          object.isCollapsed = true;
        }

        return object;
      }),
    });
  };

  toggleValue = (e, key) => {
    const form = e.target.closest(".section-form");
    const { id } = form;
    const { arrayName } = form.dataset;
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

  removeItem = (e) => {
    const form = e.target.closest(".section-form");
    const { arrayName } = form.dataset;
    const array = this.state[arrayName];
    const { id } = form;

    this.setState({
      [arrayName]: array.filter((item) => item.id !== id),
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
      sectionOpen,
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
            isClosed={sectionOpen !== "Education" ? "closed" : ""}
            onChange={this.handleSectionChange}
            createForm={this.createEducationForm}
            setOpen={this.setOpen}
            onCancel={this.cancelForm}
            toggleCollapsed={this.toggleCollapsed}
            onHide={this.toggleHidden}
            onRemove={this.removeItem}
          />

          <AddExperienceSection
            experiences={experiences}
            isClosed={sectionOpen !== "Experience" ? "closed" : ""}
            onChange={this.handleSectionChange}
            createForm={this.createExperienceForm}
            setOpen={this.setOpen}
            onCancel={this.cancelForm}
            toggleCollapsed={this.toggleCollapsed}
            onHide={this.toggleHidden}
            onRemove={this.removeItem}
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
