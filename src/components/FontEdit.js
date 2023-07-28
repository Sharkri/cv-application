import { useEffect, useState } from "react";
import "../styles/FontEdit.css";

export default function FontEdit() {
  const [font, setFont] = useState("sans");

  useEffect(() => {
    let propertyFont = font === "sans" ? "NotoSans, sans-serif" : "serif";
    let boldFont = font === "sans" ? "NotoSans-Bold, sans-serif" : "serif";

    document.body.style.setProperty("--resume-font", propertyFont);
    document.body.style.setProperty("--resume-bold", boldFont);
  }, [font]);

  return (
    <>
      <h2>Fonts</h2>
      <div className="font-select">
        <button
          className="serif-button"
          onClick={() => setFont("serif")}
          data-selected={font === "serif"}
        >
          <span className="font-test">Aa</span>
          Serif
        </button>
        <button onClick={() => setFont("sans")} data-selected={font === "sans"}>
          <span className="font-test">Aa</span>
          Sans
        </button>
      </div>
    </>
  );
}
