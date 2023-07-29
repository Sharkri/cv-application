import "../../styles/customize/AccentColorEdit.css";

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

export default function AccentColorEdit() {
  const updateProperty = (key, val) =>
    document.body.style.setProperty(key, val);

  return (
    <>
      <h2>Color</h2>
      <label className="accent-color">
        Accent Color
        <input
          type="color"
          defaultValue={getComputedStyle(document.body).getPropertyValue(
            "--resume-accent"
          )}
          onChange={(e) => {
            const hexColor = e.target.value;
            const { r, g, b } = hexToRgb(hexColor);
            const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
            const isBrighter = brightness > 127.5;
            const sectionResumeBg = isBrighter
              ? "rgba(0, 0, 0, 0.9)"
              : "rgba(14, 55, 78, 0.07)";
            const headerResumeColor = isBrighter ? "black" : "white";

            updateProperty("--header-resume-color", headerResumeColor);
            updateProperty("--section-resume-bg", sectionResumeBg);
            updateProperty("--resume-accent", hexColor);
          }}
        />
      </label>
    </>
  );
}
