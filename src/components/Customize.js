import { useState } from "react";
import "../styles/Customize.css";

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export default function Customize() {
  return (
    <div className="customize">
      <h2>Color</h2>
      <label className="accent-color">
        Accent Color
        <input
          type="color"
          defaultValue={getComputedStyle(document.body).getPropertyValue(
            "--resume-accent"
          )}
          onChange={(e) => {
            const { r, g, b } = hexToRgb(e.target.value);
            const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;

            if (brightness > 127.5) {
              document.body.style.setProperty("--header-resume-color", "black");
              document.body.style.setProperty(
                "--section-resume-bg",
                "rgba(0, 0, 0, 0.9)"
              );
            } else {
              document.body.style.setProperty("--header-resume-color", "white");

              document.body.style.setProperty(
                "--section-resume-bg",
                "rgba(14, 55, 78, 0.07)"
              );
            }

            document.body.style.setProperty("--resume-accent", e.target.value);
          }}
        />
      </label>
    </div>
  );
}
