import React, { Component } from "react";
import InputGroup from "./InputGroup";

class PersonalDetailsForm extends Component {
  render() {
    return (
      <form className="personal-details-form">
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
      </form>
    );
  }
}

export default PersonalDetailsForm;
