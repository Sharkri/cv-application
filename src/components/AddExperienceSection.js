import React, { Component } from "react";
import ExpandSection from "./ExpandSection";
import CreateForm from "./CreateForm";
import "../styles/AddEducationSection.css";

class AddExperienceSection extends Component {
  render() {
    const { isClosed, createForm, toggleClosed } = this.props;
    return (
      <div className="add-experience-section section">
        <ExpandSection
          isClosed={isClosed}
          toggleClosed={toggleClosed}
          sectionName="Experience"
          iconName="fa-solid fa-briefcase"
        />

        <div className="section-content">
          <CreateForm onClick={createForm} buttonText="Experience" />
        </div>
      </div>
    );
  }
}

export default AddExperienceSection;
