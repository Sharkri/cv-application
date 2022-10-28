import React, { Component } from "react";
import "../../styles/EducationInfoSection.css";
import EducationInfo from "./EducationInfo";
import DisplayInfo from "../DisplayInfoSection";
class EducationInfoSection extends Component {
  render() {
    const { educations } = this.props;
    return (
      <div className="education-info-section resume-section">
        <br />
        {!!educations.length && <h3 className="header-text">Education</h3>}
        <DisplayInfo array={educations} InfoComponent={EducationInfo} />
      </div>
    );
  }
}

export default EducationInfoSection;
