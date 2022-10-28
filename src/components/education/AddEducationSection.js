import React, { Component } from "react";
import DisplayForms from "../DisplayForms";
import ExpandSection from "../ExpandSection";
import CreateForm from "../CreateForm";
import "../../styles/Section.css";
import EducationForm from "./EducationForm";

class AddEducationSection extends Component {
  render() {
    const {
      educations,
      isClosed,
      onChange,
      createForm,
      setOpen,
      onCancel,
      toggleCollapsed,
      onHide,
      onRemove,
    } = this.props;
    return (
      <div className="add-education-section section">
        <ExpandSection
          isClosed={isClosed}
          setOpen={setOpen}
          sectionName="Education"
          iconName="fa-solid fa-graduation-cap"
        />

        <div className={`section-content ${isClosed}`}>
          <DisplayForms
            forms={educations}
            FormComponent={EducationForm}
            onChange={onChange}
            onCancel={onCancel}
            onHide={onHide}
            onRemove={onRemove}
            toggleCollapsed={toggleCollapsed}
            titleKey="schoolName"
          />

          <CreateForm onClick={createForm} buttonText="Education" />
        </div>
      </div>
    );
  }
}

export default AddEducationSection;
