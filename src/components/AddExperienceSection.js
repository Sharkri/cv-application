import React, { Component } from "react";
import ExpandSection from "./ExpandSection";
import CreateForm from "./CreateForm";
import "../styles/AddEducationSection.css";

class AddExperienceSection extends Component {
  render() {
    const { isClosed, createForm, setOpen, experiences } = this.props;
    return (
      <div className="add-experience-section section">
        <ExpandSection
          isClosed={isClosed}
          setOpen={setOpen}
          sectionName="Experience"
          iconName="fa-solid fa-briefcase"
        />

        <div className={`section-content ${isClosed}`}>
          <CreateForm onClick={createForm} buttonText="Experience" />
        </div>
      </div>
    );
  }
}

export default AddExperienceSection;
