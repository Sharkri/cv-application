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
      id: uniqid(),
    };
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

  removeEducationForm = (e) => {
    const { educations } = this.state;
    const id = e.target.closest(".education-form").id;
    this.setState({
      educations: educations.filter((education) => education.id !== id),
    });
  };

  toggleFormOpen = (e) => {
    const { educations } = this.state;
    const id = e.target.closest(".form").id;
    this.setState({
      educations: educations.map((education) => {
        if (education.id === id) education.isCollapsed = !education.isCollapsed;
        return education;
      }),
    });
  };

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
        <form action="" onSubmit={(e) => e.preventDefault()} noValidate>
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
            onCancel={this.removeEducationForm}
            onSave={this.toggleFormOpen}
          />
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
