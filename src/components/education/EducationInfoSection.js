import React, { Component } from "react";
import EducationInfo from "./EducationInfo";
import DisplaySection from "../DisplaySection";

class EducationInfoSection extends Component {
  render() {
    const { educations } = this.props;
    return (
      <div className="education-info-section resume-section">
        <DisplaySection
          array={educations}
          InfoComponent={EducationInfo}
          title="Education"
        />
      </div>
    );
  }
}

export default EducationInfoSection;
