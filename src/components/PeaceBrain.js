import React, { Component } from "react";
import peaceGif from "../imgs/peaceGif.gif";
import "../theme/brainGifStyle.css";

class PeaceBrain extends Component {
  state = {};

  openFour = () => {
    const { openFourSteps } = this.props;
    this.props.openFourSteps();
  };

  render() {
    return (
      <div className="brainGif">
        <img
          src={peaceGif}
          alt="computer chip brain with greenish-blue neurons"
          onClick={this.openFour}
        />
        <h2 className="slideTitle">
          Approximate State of
          <br />
          Self-Regulation
        </h2>
      </div>
    );
  }
}

export default PeaceBrain;
