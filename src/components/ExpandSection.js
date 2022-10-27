import React, { Component } from "react";
import "../styles/ExpandSection.css";

class ExpandSection extends Component {
  render() {
    const { isClosed, setOpen, sectionName, iconName } = this.props;
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
}

export default ExpandSection;
