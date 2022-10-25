import React, { Component } from "react";
import "../styles/Resume.css";
import PersonalInfoSection from "./PersonalInfoSection";
import EducationInfoSection from "./EducationInfoSection";
import "@fortawesome/fontawesome-free/css/all.min.css";

class Resume extends Component {
  render() {
    const { fullName, email, phoneNumber, address, educations } = this.props;

    return (
      <div className="resume">
        <PersonalInfoSection
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
        />
        <EducationInfoSection educations={educations} />
      </div>
    );
  }
}

export default Resume;
