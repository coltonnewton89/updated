import React, { Component } from "react";
import painGif from "../imgs/painGif.gif";
import "../theme/brainGifStyle.css";

class PainBrain extends Component {
  state = {
    fourSteps: false,
  };

  openFour = () => {
    const { openFourSteps } = this.props;
    this.props.openFourSteps();
  };

  giveInstructions = () => {
    alert("to open your four steps, click on the brain. Remember: red means pain, green means peace.");
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
            src={painGif}
            alt="computer chip style brain with pink neurons"
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

export default PainBrain;
