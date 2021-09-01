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
    alert(
      "Practicing your four steps often increase your chances of achieving a positive state of self-regulation. A new day or long periods without practicing your four steps will result in a \"Reset.\" This will change your \"Regulation Map\" back to red, indicating you might need to practice your four steps. This will change to blue after two or three times of practicing your four steps. To do so, simply click on the \"Regulation Map.\" (This is the brain displayed in the center.)"
    );
  };
  z;

  render() {
    return (
      <div className="brainGif">
        <p className="slideTitle">
          Approximate State of
          <br />
          Self-Regulation
        </p>
        <div className="gifContainer">
        <img
          className='brain'
            src={painGif}
            alt="computer chip style brain with pink neurons"
            onClick={this.openFour}
          />
        </div>
        <p className="instructions" onClick={this.giveInstructions}>
          ?
        </p>
      </div>
    );
  }
}

export default PainBrain;
