import React, { Component } from "react";
import "../styles/EducationInfoSection.css";
import EducationInfo from "./EducationInfo";

class EducationInfoSection extends Component {
  render() {
    const { educations } = this.props;
    return (
      <div className="education-info-section section">
        <br />
        {Object.values(this.props).some((prop) => prop) ? (
          <h3 className="header-text">Education</h3>
        ) : null}

        {educations.map((education) => (
          <EducationInfo
            schoolName={education.schoolName}
            degree={education.degree}
            location={education.location}
            startDate={education.startDate}
            endDate={education.endDate}
            key={education.id}
          />
        ))}
      </div>
    );
  }
}

export default EducationInfoSection;
