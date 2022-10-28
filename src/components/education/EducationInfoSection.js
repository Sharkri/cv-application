import React, { Component } from "react";
import EducationInfo from "./EducationInfo";
import DisplayInfo from "../DisplayInfo";
import ResumeHeaderSection from "../ResumeHeaderSection";

class EducationInfoSection extends Component {
  render() {
    const { educations } = this.props;
    return (
      <div className="education-info-section resume-section">
        {!!educations.length && <ResumeHeaderSection title="Education" />}
        <DisplayInfo array={educations} InfoComponent={EducationInfo} />
      </div>
    );
  }
}

export default EducationInfoSection;
