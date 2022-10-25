import React, { Component } from "react";
import "../styles/CollapsedForm.css";

class CollapsedForm extends Component {
  render() {
    const { onClick, title } = this.props;
    return (
      <button className="collapsed-form" onClick={onClick}>
        {title}
      </button>
    );
  }
}

export default CollapsedForm;
