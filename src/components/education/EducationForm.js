import React, { Component } from "react";
import InputGroup from "../InputGroup";

class EducationForm extends Component {
  render() {
    const {
      onChange,
      degree,
      schoolName,
      location,
      startDate,
      endDate,
      id,
      cancel,
      save,
      remove,
    } = this.props;
    return (
      <form
        className="education-form form"
        id={id}
        data-array-name="educations"
        onSubmit={(e) => e.preventDefault()}
      >
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
          id="degree"
          labelText="Degree"
          placeholder="Enter Degree / Field Of Study"
          value={degree}
          onChange={onChange}
          data-key="degree"
        />
        <div className="education-dates">
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
        <InputGroup
          type="text"
          id="location"
          labelText="Location"
          placeholder="Enter Location"
          value={location}
          onChange={onChange}
          data-key="location"
          optional
        />
        <div className="buttons">
          <button className="delete" onClick={remove} type="button">
            <i className="fa-solid fa-trash" />
            Delete
          </button>
          <div className="main-buttons">
            <button className="cancel" onClick={cancel} type="button">
              Cancel
            </button>
            <button className="save" onClick={save} type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default EducationForm;
