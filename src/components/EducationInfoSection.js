import React, { Component } from "react";

class EducationInfoSection extends Component {
  render() {
    const { degree, schoolName, location, startDate, endDate } = this.props;
    return (
      <div className="education-info section">
        <br />
        <h3 className="header-text">Education</h3>
        <p>{degree}</p>
        <p>{schoolName}</p>
        <p>{location}</p>
        <p>
          {startDate}
          {startDate && endDate ? <span> – </span> : null}
          {endDate}
        </p>
      </div>
    );
  }
}

export default EducationInfoSection;
