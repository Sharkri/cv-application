import React, { Component } from "react";
import "../styles/EducationInfoSection.css";

class EducationInfoSection extends Component {
  render() {
    const { degree, schoolName, location, startDate, endDate } = this.props;
    return (
      <div className="education-info section">
        <br />
        {Object.values(this.props).some((prop) => prop) ? (
          <h3 className="header-text">Education</h3>
        ) : null}

        <div className="main-info">
          <div className="container-group">
            <p className="dates">
              {startDate}
              {startDate && endDate ? <span> – </span> : null}
              {endDate}
            </p>
            <p>{location}</p>
          </div>

          <div className="container-group">
            <p className="main-info-schoolName">{schoolName}</p>
            <p>{degree}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EducationInfoSection;
