import "../styles/Sidebar.css";

export default function Sidebar({ onGoToPage }) {
  return (
    <nav className="sidebar">
      <button onClick={() => onGoToPage("content")}>content</button>
      <button onClick={() => onGoToPage("customize")}>customize</button>
    </nav>
  );
}
