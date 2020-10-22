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
      "Practicing your four steps often increase your chances of achieving a positive state of self-regulation. A new day or long periods without practicing your four steps will result in a \"Reset.\" This will change your \"Regulation Map\" back to red, indicating you might need to practice your four steps. This will change to blue (representing positive) after two or three times of practicing your four steps. To do so, simply click on the \"Regulation Map.\" (This is the brain displayed in the center.)"
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
