import React, { Component } from "react";
import EducationForms from "./EducationForms";
import "../styles/AddEducationSection.css";

class AddEducationSection extends Component {
  render() {
    const {
      educations,
      isClosed,
      onChange,
      createForm,
      toggleClosed,
      onCancel,
      toggleCollapsed,
      onOpen,
      onHide,
      onRemove,
    } = this.props;
    return (
      <div className="add-education-section">
        <button className="expand-add-education-section" onClick={toggleClosed}>
          <h2 className="add-education-header">
            <i className="fa-solid fa-graduation-cap" />
            Education
          </h2>
          <i className={`fa-solid fa-chevron-up chevron ${isClosed}`} />
        </button>

        <div className={`education-content ${isClosed}`}>
          <EducationForms
            educations={educations}
            onChange={onChange}
            onCancel={onCancel}
            toggleCollapsed={toggleCollapsed}
            onOpen={onOpen}
            onHide={onHide}
            onRemove={onRemove}
          />

          <button className="create-education-form" onClick={createForm}>
            <h4 className="button-content">
              <i className="fa-solid fa-plus" />
              Education
            </h4>
          </button>
        </div>
      </div>
    );
  }
}

export default AddEducationSection;
