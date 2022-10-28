import React, { Component } from "react";
import ExperienceInfo from "./ExperienceInfo";
import DisplaySection from "../DisplaySection";

class ExperienceInfoSection extends Component {
  render() {
    const { experiences } = this.props;
    return (
      <div className="experience-info-section resume-section">
        <DisplaySection
          array={experiences}
          InfoComponent={ExperienceInfo}
          title="Professional Experience"
        />
      </div>
    );
  }
}

export default ExperienceInfoSection;
