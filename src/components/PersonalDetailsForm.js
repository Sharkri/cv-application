import React, { Component } from "react";

class PersonalDetailsForm extends Component {
  render() {
    return (
      <form className="personal-details-form">
        <div className="input-group">
          <label htmlFor="full-name">Full name</label>
          <input
            type="text"
            id="full-name"
            placeholder="Enter your first and last name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" />
        </div>
        <div className="input-group">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="tel"
            id="phone-number"
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="input-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="City, Country" />
        </div>
      </form>
    );
  }
}

export default PersonalDetailsForm;
