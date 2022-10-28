import React, { Component } from "react";

class ResumeHeaderSection extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <br />
        <h3 className="header-text">{title}</h3>
      </div>
    );
  }
}

export default ResumeHeaderSection;
