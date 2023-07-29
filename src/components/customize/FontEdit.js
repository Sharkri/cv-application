import { useEffect, useState } from "react";
import "../../styles/customize/FontEdit.css";

export default function FontEdit() {
  const [font, setFont] = useState("sans");

  useEffect(() => {
    let propertyFont = font === "sans" ? "NotoSans, sans-serif" : font;
    let boldFont = font === "sans" ? "NotoSans-Bold, sans-serif" : font;

    document.body.style.setProperty("--resume-font", propertyFont);
    document.body.style.setProperty("--resume-bold", boldFont);
  }, [font]);

  return (
    <>
      <h2>Fonts</h2>
      <div className="font-select">
        <button
          className="serif-btn"
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
        <button
          onClick={() => setFont("monospace")}
          data-selected={font === "monospace"}
          className="monospace-btn"
        >
          <span className="font-test">Aa</span>
          Mono
        </button>
      </div>
    </>
  );
}
