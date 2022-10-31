import React from "react";
import "../styles/ExpandSection.css";

function ExpandSection({ isClosed, setOpen, sectionName, iconName }) {
  return (
    <button
      className="expand-section"
      onClick={() => setOpen(isClosed ? sectionName : "")}
    >
      <h2 className="expand-section-header">
        <i className={`${iconName}`} />
        {sectionName}
      </h2>
      <i className={`fa-solid fa-chevron-up chevron ${isClosed}`} />
    </button>
  );
}

export default ExpandSection;
