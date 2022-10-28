import React, { Component } from "react";
import ResumeHeaderSection from "./ResumeHeaderSection";

class DisplaySection extends Component {
  render() {
    const { array, InfoComponent, title } = this.props;
    return (
      <React.Fragment>
        {/* Hide resume header if every child in array is hidden. */}
        {!array.every((obj) => obj.isHidden) && (
          <ResumeHeaderSection title={title} />
        )}

        {array.map(
          (info) =>
            !info.isHidden && <InfoComponent info={info} key={info.id} />
        )}
      </React.Fragment>
    );
  }
}

export default DisplaySection;
