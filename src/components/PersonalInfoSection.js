import React, { Component } from "react";
import "../styles/PersonalInfoSection.css";

class PersonalInfoSection extends Component {
  render() {
    const { email, fullName, phoneNumber, address } = this.props;
    return (
      <div className="personal-info section">
        <h1 className="resume-name">{fullName}</h1>
        <div className="contact-info">
          <div>
            {email ? <i className="fa-solid fa-envelope" /> : null}
            <span>{email}</span>
          </div>
          <div>
            {phoneNumber ? <i className="fa-solid fa-phone" /> : null}
            <span>{phoneNumber}</span>
          </div>
          <div>
            {address ? <i className="fa-solid fa-location-dot" /> : null}
            <span>{address}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalInfoSection;
