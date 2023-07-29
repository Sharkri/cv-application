import "../styles/customize/Customize.css";
import AccentColorEdit from "./customize/AccentColorEdit";
import FontEdit from "./customize/FontEdit";
import ResumeColsEdit from "./customize/ResumeColsEdit";

export default function Customize({ isShown, onColChange }) {
  return (
    <div
      className="customize"
      style={{ display: isShown ? undefined : "none" }}
    >
      <div>
        <ResumeColsEdit onColChange={onColChange} />
      </div>
      <div>
        <AccentColorEdit />
      </div>
      <div>
        <FontEdit />
      </div>
    </div>
  );
}
