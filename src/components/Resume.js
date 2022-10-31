import React from "react";
import "../styles/Resume.css";
import PersonalInfoSection from "./personal-info/PersonalInfoSection";
import EducationInfoSection from "./education/EducationInfoSection";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ExperienceInfoSection from "./experience/ExperienceInfoSection";

function Resume({
  fullName,
  email,
  phoneNumber,
  address,
  educations,
  experiences,
}) {
  return (
    <div className="resume">
      <PersonalInfoSection
        fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
      />

      <EducationInfoSection educations={educations} />
      <ExperienceInfoSection experiences={experiences} />
    </div>
  );
}

export default Resume;
