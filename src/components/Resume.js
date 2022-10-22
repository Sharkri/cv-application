import React, { Component } from "react";
import "../styles/Resume.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

class Resume extends Component {
  render() {
    const { fullName, email, phoneNumber, address } =
      this.props.personalDetails;
    return (
      <div className="resume">
        <div className="personal-info section">
          <h2 className="resume-name">{fullName}</h2>
          <div className="contact-info">
            <div>
              <i className="fa-solid fa-envelope" />
              {email}
            </div>
            <div>
              <i className="fa-solid fa-phone" />
              {phoneNumber}
            </div>
            <div>
              <i className="fa-solid fa-location-dot" />
              {address}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
