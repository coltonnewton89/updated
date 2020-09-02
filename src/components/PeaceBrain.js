import React, { Component } from "react";
import peaceGif from "../imgs/peaceGif.gif";
import "../theme/brainGifStyle.css";

class PeaceBrain extends Component {
  state = {
    fourSteps: false,
  };

  openFour = () => {
    const { openFourSteps } = this.props;
    this.props.openFourSteps();
  };

  giveInstructions = () => {
    alert(
      "to open your four steps, click on the brain. Remember: red means pain, green means peace."
    );
  };

  render() {
    return (
      <div className="brainGif">
        <h2 className="slideTitle">
          Approximate State of
          <br />
          Self-Regulation
        </h2>
        <div className="gifContainer">
          <img
            src={peaceGif}
            alt="computer chip brain with greenish-blue neurons"
            onClick={this.openFour}
          />
        </div>
        <p className="instructions" onClick={this.giveInstructions}>
          i
        </p>
      </div>
    );
  }
}

export default PeaceBrain;
