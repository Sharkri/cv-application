import React, { Component } from "react";
import "../../styles/ExperienceInfoSection.css";

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
        {companyName}
        {positionTitle}
        {location}
        {description}
        {startDate}
        {endDate}
      </div>
    );
  }
}

export default ExperienceInfo;
