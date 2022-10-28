import React, { Component } from "react";
import "../../styles/ExperienceInfoSection.css";
import ExperienceInfo from "./ExperienceInfo";
import DisplayInfo from "../DisplayInfo";
import ResumeHeaderSection from "../ResumeHeaderSection";

class ExperienceInfoSection extends Component {
  render() {
    const { experiences } = this.props;
    return (
      <div className="education-info-section resume-section">
        {!!experiences.length && <ResumeHeaderSection title="Experiences" />}
        <DisplayInfo array={experiences} InfoComponent={ExperienceInfo} />
      </div>
    );
  }
}

export default ExperienceInfoSection;
