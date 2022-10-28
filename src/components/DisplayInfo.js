import React, { Component } from "react";

class DisplayInfo extends Component {
  render() {
    const { array, InfoComponent } = this.props;
    return (
      <div className="education-info-container">
        {array.map(
          (info) =>
            !info.isHidden && <InfoComponent info={info} key={info.id} />
        )}
      </div>
    );
  }
}

export default DisplayInfo;
