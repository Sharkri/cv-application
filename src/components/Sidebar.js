import "../styles/Sidebar.css";

export default function Sidebar({ onGoToPage, page }) {
  return (
    <nav className="sidebar">
      <button
        onClick={() => onGoToPage("content")}
        data-selected={page === "content"}
      >
        <i className="fa-regular fa-file-lines" />
        Content
      </button>
      <button
        onClick={() => onGoToPage("customize")}
        data-selected={page === "customize"}
      >
        <i className="fa-solid fa-pen-ruler" />
        Customize
      </button>
    </nav>
  );
}
