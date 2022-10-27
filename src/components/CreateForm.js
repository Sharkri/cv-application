import React, { Component } from "react";
import "../styles/CreateForm.css";

class CreateForm extends Component {
  render() {
    const { onClick, buttonText } = this.props;
    return (
      <button className="create-form" onClick={onClick}>
        <h4 className="button-content">
          <i className="fa-solid fa-plus" />
          {buttonText}
        </h4>
      </button>
    );
  }
}

export default CreateForm;
