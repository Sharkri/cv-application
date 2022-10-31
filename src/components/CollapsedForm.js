import "../styles/CollapsedForm.css";

function CollapsedForm(props) {
  const { onClick, hideForm, title, arrayName } = props;
  const { isHidden, id } = props.form;
  return (
    <button
      className="collapsed-form section-form"
      id={id}
      onClick={onClick}
      data-array-name={arrayName}
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

export default CollapsedForm;
