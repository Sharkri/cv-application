import React, { Component } from "react";
import InputGroup from "./InputGroup";

class PersonalDetails extends Component {
  render() {
    return (
      <div className="personal-details">
        <InputGroup
          type="text"
          id="full-name"
          labelText="Full name"
          placeholder="Enter your first and last name"
        />

        <InputGroup
          type="email"
          id="email"
          labelText="Email"
          placeholder="Enter email"
        />

        <InputGroup
          type="tel"
          id="phone-number"
          labelText="Phone number"
          placeholder="Enter phone number"
        />

        <InputGroup
          type="text"
          id="address"
          labelText="Address"
          placeholder="City, Country"
        />
      </div>
    );
  }
}

export default PersonalDetails;
