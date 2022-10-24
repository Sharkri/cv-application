import React, { Component } from "react";
import EducationForm from "./EducationForm";

class EducationForms extends Component {
  render() {
    const { educations, onChange, onCancel, onSave } = this.props;
    return (
      <div className="education-forms-container">
        {educations.map((education) => (
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
            save={onSave}
          />
        ))}
      </div>
    );
  }
}

export default EducationForms;
