import React, { Component } from "react";
import InputGroup from "../InputGroup";

class EducationForm extends Component {
  render() {
    const {
      companyName,
      positionTitle,
      location,
      description,
      startDate,
      endDate,
      id,
    } = this.props.form;

    const { onChange, cancel, save, remove } = this.props;

    return (
      <form
        className="experience-form"
        id={id}
        data-array-name="experiences"
        onSubmit={(e) => e.preventDefault()}
      >
        <InputGroup
          type="text"
          id="company-name"
          labelText="Company Name"
          placeholder="Enter Company Name"
          value={companyName}
          onChange={onChange}
          data-key="companyName"
        />
        <InputGroup
          type="text"
          id="position-title"
          labelText="Position Title"
          placeholder="Enter Position Title"
          value={positionTitle}
          onChange={onChange}
          data-key="positionTitle"
        />
        <div className="dates-group">
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
        <InputGroup
          type="text"
          id="description"
          labelText="description"
          placeholder="Enter Description"
          value={description}
          onChange={onChange}
          data-key="description"
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
