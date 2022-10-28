import React, { Component } from "react";
import "../../styles/EducationInfoSection.css";

class EducationInfo extends Component {
  render() {
    const { schoolName, degree, location, startDate, endDate } =
      this.props.info;
    return (
      <div className="education-info">
        <div className="education-info-group">
          <p className="dates">
            {startDate}
            {startDate && endDate && <span> – </span>}
            {endDate}
          </p>
          <p>{location}</p>
        </div>

        <div className="education-info-group">
          <p className="education-info-schoolName">{schoolName}</p>
          <p className="education-info-degree">{degree}</p>
        </div>
      </div>
    );
  }
}

export default EducationInfo;
