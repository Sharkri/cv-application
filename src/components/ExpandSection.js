import "../styles/ExpandSection.css";

function ExpandSection({ isOpen, setOpen, sectionName, iconName }) {
  return (
    <button
      className="expand-section"
      onClick={() => setOpen(isOpen ? "" : sectionName)}
    >
      <h2 className="expand-section-header">
        <i className={`${iconName}`} />
        {sectionName}
      </h2>
      <i className={`fa-solid fa-chevron-up chevron ${isOpen ? "open" : ""}`} />
    </button>
  );
}

export default ExpandSection;
