import React, { Component } from "react";
import "../styles/CollapsedForm.css";

class CollapsedForm extends Component {
  render() {
    const { onClick, title, id } = this.props;
    return (
      <button className="collapsed-form form" id={id} onClick={onClick}>
        {title}
      </button>
    );
  }
}

export default CollapsedForm;
