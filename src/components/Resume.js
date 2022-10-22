import React, { Component } from "react";
import "../styles/Resume.css";
class Resume extends Component {
  render() {
    const { fullName, email, phoneNumber, address } =
      this.props.personalDetails;
    return (
      <div className="resume">
        <div className="personal-info section">
          <p>{fullName}</p>
          <p>{email}</p>
          <p>{phoneNumber}</p>
          <p>{address}</p>
        </div>
      </div>
    );
  }
}

export default Resume;
