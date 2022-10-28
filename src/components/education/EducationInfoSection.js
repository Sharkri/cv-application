import React, { Component } from "react";
import "../../styles/EducationInfoSection.css";
import EducationInfo from "./EducationInfo";

class EducationInfoSection extends Component {
  render() {
    const { educations } = this.props;
    return (
      <div className="education-info-section resume-section">
        <br />
        {!!educations.length && <h3 className="header-text">Education</h3>}

        <div className="education-info-container">
          {educations.map(
            (education) =>
              !education.isHidden && (
                <EducationInfo
                  schoolName={education.schoolName}
                  degree={education.degree}
                  location={education.location}
                  startDate={education.startDate}
                  endDate={education.endDate}
                  key={education.id}
                />
              )
          )}
        </div>
      </div>
    );
  }
}

export default EducationInfoSection;