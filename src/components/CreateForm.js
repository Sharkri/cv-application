import React from "react";
import "../styles/CreateForm.css";

function CreateForm(props) {
  const { onClick, buttonText } = props;
  return (
    <button className="create-form" onClick={onClick}>
      <h4 className="button-content">
        <i className="fa-solid fa-plus" />
        {buttonText}
      </h4>
    </button>
  );
}

export default CreateForm;
