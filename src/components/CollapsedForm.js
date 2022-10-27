import React, { Component } from "react";
import "../styles/CollapsedForm.css";

class CollapsedForm extends Component {
  render() {
    const { onClick, hideForm, isHidden, title, id } = this.props;
    return (
      <button
        className="collapsed-form form"
        id={id}
        onClick={onClick}
        data-array-name="educations"
      >
        <p className="collapsed-form-title">{title}</p>
        <i
          className={`fa-regular ${isHidden ? "fa-eye-slash" : "fa-eye"} eye`}
          onClick={(e) => {
            e.stopPropagation();
            hideForm(e);
          }}
        ></i>
      </button>
    );
  }
}

export default CollapsedForm;
