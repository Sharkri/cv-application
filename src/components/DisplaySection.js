import React from "react";
import ResumeHeaderSection from "./ResumeHeaderSection";

function DisplaySection({ array, InfoComponent, title }) {
  return (
    <React.Fragment>
      {/* Hide resume header if every child in array is hidden. */}
      {!array.every((obj) => obj.isHidden) && (
        <ResumeHeaderSection title={title} />
      )}

      {array.map(
        (info) => !info.isHidden && <InfoComponent info={info} key={info.id} />
      )}
    </React.Fragment>
  );
}

export default DisplaySection;
