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
              {email ? <i className="fa-solid fa-envelope" /> : null}
              {email}
            </div>
            <div>
              {phoneNumber ? <i className="fa-solid fa-phone" /> : null}
              {phoneNumber}
            </div>
            <div>
              {address ? <i className="fa-solid fa-location-dot" /> : null}
              {address}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
