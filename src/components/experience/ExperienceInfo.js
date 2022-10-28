import React, { Component } from "react";
import "../../styles/ExperienceInfo.css";

class ExperienceInfo extends Component {
  render() {
    const {
      companyName,
      positionTitle,
      location,
      description,
      startDate,
      endDate,
    } = this.props.info;
    return (
      <div className="experience-info">
        <div className="experience-info-group">
          <p className="dates">
            {startDate}
            {startDate && endDate && <span> – </span>}
            {endDate}
          </p>
          <p>{location}</p>
        </div>

        <div className="experience-info-group">
          <p className="experience-info-companyName">{companyName}</p>
          <p className="experience-info-positionTitle">{positionTitle}</p>
        </div>
      </div>
    );
  }
}

export default ExperienceInfo;
