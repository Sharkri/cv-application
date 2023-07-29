import "../styles/Customize.css";
import AccentColorEdit from "./AccentColorEdit";
import FontEdit from "./FontEdit";

export default function Customize({ isShown }) {
  return (
    <div
      className="customize"
      style={{ display: isShown ? undefined : "none" }}
    >
      <div>
        <AccentColorEdit />
      </div>
      <div>
        <FontEdit />
      </div>
    </div>
  );
}
