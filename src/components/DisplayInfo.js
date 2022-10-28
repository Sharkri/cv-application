import React, { Component } from "react";

class DisplayInfo extends Component {
  render() {
    const { array, InfoComponent } = this.props;
    return (
      <React.Fragment>
        {array.map(
          (info) =>
            !info.isHidden && <InfoComponent info={info} key={info.id} />
        )}
      </React.Fragment>
    );
  }
}

export default DisplayInfo;
