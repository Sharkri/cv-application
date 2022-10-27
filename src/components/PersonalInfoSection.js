import React, { Component } from "react";
import "../styles/PersonalInfoSection.css";

class PersonalInfoSection extends Component {
  render() {
    const { email, fullName, phoneNumber, address } = this.props;
    return (
      <div className="personal-info">
        <h1 className="resume-name">{fullName}</h1>
        <div className="contact-info">
          {email && (
            <div>
              <i className="fa-solid fa-envelope" />
              <span>{email}</span>
            </div>
          )}

          {phoneNumber && (
            <div>
              <i className="fa-solid fa-phone" />
              <span>{phoneNumber}</span>
            </div>
          )}

          {address && (
            <div>
              <i className="fa-solid fa-location-dot" />
              <span>{address}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PersonalInfoSection;
