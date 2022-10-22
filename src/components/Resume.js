import React, { Component } from "react";
import "../styles/Resume.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PersonalInfoSection from "./PersonalInfoSection";

class Resume extends Component {
  render() {
    const { fullName, email, phoneNumber, address } = this.props;
    return (
      <div className="resume">
        <PersonalInfoSection
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
        />

        <div className="education-details section">{}</div>
      </div>
    );
  }
}

export default Resume;
