import React, { Component } from "react";
import "../styles/Resume.css";
import PersonalInfoSection from "./personal-info/PersonalInfoSection";
import EducationInfoSection from "./education/EducationInfoSection";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ExperienceInfoSection from "./experience/ExperienceInfoSection";

class Resume extends Component {
  render() {
    const { fullName, email, phoneNumber, address, educations, experiences } =
      this.props;

    return (
      <div className="resume">
        <PersonalInfoSection
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
        />
        <EducationInfoSection educations={educations} />
        <ExperienceInfoSection experiences={experiences} />
      </div>
    );
  }
}

export default Resume;
