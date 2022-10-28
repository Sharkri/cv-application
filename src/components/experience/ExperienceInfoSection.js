import React, { Component } from "react";
import ExperienceInfo from "./ExperienceInfo";
import DisplayInfo from "../DisplayInfo";
import ResumeHeaderSection from "../ResumeHeaderSection";

class ExperienceInfoSection extends Component {
  render() {
    const { experiences } = this.props;
    return (
      <div className="experience-info-section resume-section">
        {!experiences.every((experience) => experience.isHidden) && (
          <ResumeHeaderSection title="Experiences" />
        )}

        <DisplayInfo array={experiences} InfoComponent={ExperienceInfo} />
      </div>
    );
  }
}

export default ExperienceInfoSection;
