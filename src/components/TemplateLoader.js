import "../styles/TemplateLoader.css";

export default function TemplateLoader({ onTemplateLoad, onClear }) {
  return (
    <div className="template-loader">
      <button onClick={onTemplateLoad} className="load-example">
        Load Example
      </button>
      <button onClick={onClear} className="clear-resume">
        <i className="fa-solid fa-trash" />
        Clear Resume
      </button>
    </div>
  );
}
