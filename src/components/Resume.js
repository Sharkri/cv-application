import React, { Component } from "react";
import "../styles/Resume.css";
class Resume extends Component {
  render() {
    const { email, phoneNumber, fullName, address } =
      this.props.personalDetails;
    return (
      <div className="resume">
        <div className="personal-info section">
          <p>{email}</p>
        </div>
      </div>
    );
  }
}

export default Resume;
