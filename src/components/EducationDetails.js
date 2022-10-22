import React, { Component } from "react";
import InputGroup from "./InputGroup";

class EducationDetails extends Component {
  render() {
    const { onChange, degree, schoolName, location, startDate, endDate } =
      this.props;
    return (
      <div className="education-details">
        <InputGroup
          type="text"
          id="degree"
          labelText="Degree"
          placeholder="Enter Degree / Field Of Study"
          value={degree}
          onChange={onChange}
          data-key="degree"
        />

        <InputGroup
          type="text"
          id="school-name"
          labelText="School"
          placeholder="Enter school / university"
          value={schoolName}
          onChange={onChange}
          data-key="schoolName"
        />

        <InputGroup
          type="text"
          id="location"
          labelText="Location"
          placeholder="City, Country"
          value={location}
          onChange={onChange}
          data-key="location"
        />

        <InputGroup
          type="text"
          id="date"
          labelText="Start Date"
          placeholder="Enter Start Date"
          value={startDate}
          onChange={onChange}
          data-key="startDate"
        />

        <InputGroup
          type="text"
          id="date"
          labelText="End Date"
          placeholder="Enter End Date"
          value={endDate}
          onChange={onChange}
          data-key="endDate"
        />
      </div>
    );
  }
}

export default EducationDetails;
