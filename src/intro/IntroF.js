import React, { Component } from "react";
import moveToPeace from "../imgs/moveToPeace.png";

class IntroF extends Component {
  state = {};

  moveOn = () => {
    const { toggleF } = this.props;
    this.props.toggleF();
  };
  render() {
    return (
      <div className="introFContainer">
        <div>
          <h3>
            Let's move away from your pain cycle for a second and develop a new
            way of thinking and responding.
          </h3>
          <img
            className="moveToPeace"
            src={moveToPeace}
            alt="normal light bulb standing over red shattered light bulb"
          />
          <br />
          <button className="introPCSubmit" onClick={this.moveOn}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default IntroF;
