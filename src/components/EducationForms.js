import React, { Component } from "react";
import EducationForm from "./EducationForm";
import CollapsedForm from "./CollapsedForm";

class EducationForms extends Component {
  render() {
    const { educations, onChange, onCancel, toggleCollapsed, onHide } =
      this.props;
    return (
      <div className="education-forms-container">
        {educations.map((education) =>
          education.isCollapsed ? (
            <CollapsedForm
              onClick={toggleCollapsed}
              key={education.id}
              id={education.id}
              title={education.schoolName}
              isHidden={education.isHidden}
              hideForm={onHide}
            />
          ) : (
            <EducationForm
              onChange={onChange}
              degree={education.degree}
              schoolName={education.schoolName}
              location={education.location}
              startDate={education.startDate}
              endDate={education.endDate}
              key={education.id}
              id={education.id}
              cancel={onCancel}
              save={toggleCollapsed}
            />
          )
        )}
      </div>
    );
  }
}

export default EducationForms;
