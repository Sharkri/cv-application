import React, { Component } from "react";
import EducationForms from "./EducationForms";
import ExpandSection from "./ExpandSection";
import CreateForm from "./CreateForm";
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
      <div className="add-education-section section">
        <ExpandSection
          isClosed={isClosed}
          toggleClosed={toggleClosed}
          sectionName="Education"
          iconName="fa-solid fa-graduation-cap"
        />

        <div className={`section-content ${isClosed}`}>
          <EducationForms
            educations={educations}
            onChange={onChange}
            onCancel={onCancel}
            toggleCollapsed={toggleCollapsed}
            onOpen={onOpen}
            onHide={onHide}
            onRemove={onRemove}
          />

          <CreateForm onClick={createForm} buttonText="Education" />
        </div>
      </div>
    );
  }
}

export default AddEducationSection;
