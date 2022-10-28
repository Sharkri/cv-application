import React, { Component } from "react";
import "../styles/CollapsedForm.css";

class CollapsedForm extends Component {
  render() {
    const { onClick, hideForm } = this.props;
    const { isHidden, title, id } = this.props.form;
    return (
      <form id={id} data-array-name="educations">
        <button className="collapsed-form" onClick={onClick} type="button">
          <p className="collapsed-form-title">{title}</p>
          <i
            className={`fa-regular ${isHidden ? "fa-eye-slash" : "fa-eye"} eye`}
            onClick={(e) => {
              e.stopPropagation();
              hideForm(e);
            }}
          ></i>
        </button>
      </form>
    );
  }
}

export default CollapsedForm;
