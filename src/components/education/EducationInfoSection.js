import EducationInfo from "./EducationInfo";
import DisplaySection from "../DisplaySection";

function EducationInfoSection({ educations }) {
  return (
    <div className="education-info-section resume-section">
      <DisplaySection
        array={educations}
        InfoComponent={EducationInfo}
        title="Education"
      />
    </div>
  );
}

export default EducationInfoSection;
