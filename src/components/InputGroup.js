import React, { Component } from "react";
import "../styles/InputGroup.css";
class InputGroup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      placeholder,
      type,
      labelText,
      onChange,
      value,
      "data-key": dataKey,
    } = this.props;

    return (
      <div className="input-group">
        <label htmlFor={id}>{labelText}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
        />
      </div>
    );
  }
}

export default InputGroup;
