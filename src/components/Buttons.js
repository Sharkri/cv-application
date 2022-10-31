import "../styles/Buttons.css";

function Buttons({ cancel, save, remove }) {
  return (
    <div className="buttons">
      <button className="delete" onClick={remove} type="button">
        <i className="fa-solid fa-trash" />
        Delete
      </button>
      <div className="main-buttons">
        <button className="cancel" onClick={cancel} type="button">
          Cancel
        </button>
        <button className="save" onClick={save} type="submit">
          Save
        </button>
      </div>
    </div>
  );
}

export default Buttons;
