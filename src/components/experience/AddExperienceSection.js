import ExpandSection from "../ExpandSection";
import CreateForm from "../CreateForm";
import "../../styles/Section.css";
import DisplayForms from "../DisplayForms";
import ExperienceForm from "./ExperienceForm";

function AddExperienceSection({
  isClosed,
  createForm,
  setOpen,
  experiences,
  onChange,
  onCancel,
  toggleCollapsed,
  onHide,
  onRemove,
}) {
  return (
    <div className="add-experience-section section">
      <ExpandSection
        isClosed={isClosed}
        setOpen={setOpen}
        sectionName="Experience"
        iconName="fa-solid fa-briefcase"
      />

      <div className={`section-content ${isClosed}`}>
        <DisplayForms
          forms={experiences}
          onChange={onChange}
          onCancel={onCancel}
          toggleCollapsed={toggleCollapsed}
          onHide={onHide}
          onRemove={onRemove}
          FormComponent={ExperienceForm}
          titleKey="companyName"
          arrayName="experiences"
        />

        <CreateForm onClick={createForm} buttonText="Experience" />
      </div>
    </div>
  );
}

export default AddExperienceSection;
