import React, { Component } from "react";
import CollapsedForm from "./CollapsedForm";

class DisplayForms extends Component {
  render() {
    const {
      forms,
      onChange,
      onCancel,
      toggleCollapsed,
      onHide,
      onRemove,
      FormComponent,
      titleKey,
    } = this.props;
    return (
      <div className="forms-container">
        {forms.map((form) =>
          form.isCollapsed ? (
            <CollapsedForm
              onClick={toggleCollapsed}
              key={form.id}
              form={form}
              title={form[titleKey]}
              hideForm={onHide}
            />
          ) : (
            <FormComponent
              onChange={onChange}
              form={form}
              key={form.id}
              cancel={onCancel}
              save={toggleCollapsed}
              remove={onRemove}
            />
          )
        )}
      </div>
    );
  }
}

export default DisplayForms;
