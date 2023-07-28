import "../styles/Customize.css";
import AccentColorEdit from "./AccentColorEdit";
import FontEdit from "./FontEdit";

export default function Customize() {
  return (
    <div className="customize">
      <div>
        <AccentColorEdit />
      </div>
      <div>
        <FontEdit />
      </div>
    </div>
  );
}
