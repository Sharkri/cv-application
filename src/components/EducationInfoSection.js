import React, { Component } from "react";
import "../styles/EducationInfoSection.css";
import EducationInfo from "./EducationInfo";

class EducationInfoSection extends Component {
  render() {
    const { educations } = this.props;
    return (
      <div className="education-info-section section">
        <br />
        {!!educations.length && <h3 className="header-text">Education</h3>}

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
    );
  }
}

export default EducationInfoSection;
