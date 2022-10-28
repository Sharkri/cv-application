import React, { Component } from "react";
import "../styles/ResumeHeaderSection.css";

class ResumeHeaderSection extends Component {
  render() {
    const { title } = this.props;
    return <h3 className="header-text">{title}</h3>;
  }
}

export default ResumeHeaderSection;
