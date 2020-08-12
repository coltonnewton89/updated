import React, { Component } from "react";
import "../theme/FourSteps.css";
import Success from "../imgs/success.png";

class FourSteps extends Component {
  state = {
    stepOne: false,
    stepTwo: false,
    stepThree: false,
    stepFour: false,
  };

  stepOneComplete = () => {
    this.setState({
      stepOne: true,
    });
  };

  stepTwoComplete = () => {
    this.setState({ stepTwo: true });
  };

  stepThreeComplete = () => {
    this.setState({ stepThree: true });
  };

  stepFourComplete = () => {
    this.setState({ stepFour: true });
  };

  completeFourSteps = () => {
    const { _completeFourSteps } = this.props;
    this.props._completeFourSteps();
  };

  render() {
    return (
      <div>
        {this.state.stepFour ? (
          <div className="successDiv">
            <p>Keep it up! Repitition is key!</p>
            <img
              className="thumbsUp"
              src={Success}
              alt="Green circle with Thumbs up"
            />
            <button className="fourStepBtn" onClick={this.completeFourSteps}>
              Got it
            </button>
          </div>
        ) : (
          <div className="timelineContainer">
            <div className="fourStepContent">
              <p>
                <b>Your Pain, Your Pain, and Your Pain</b>
              </p>
              <p className="fourP">is your pain.</p>
              {this.state.stepOne ? null : (
                <button className="fourStepBtn" onClick={this.stepOneComplete}>
                  Continue
                </button>
              )}
            </div>

            {this.state.stepOne ? (
              <div className="fourStepContent">
                <p>
                  <b>Your Cope, Your cope, and YoUr CoPe</b>
                </p>
                <p className="fourP">is your cope.</p>
                {this.state.stepTwo ? null : (
                  <button
                    className="fourStepBtn"
                    onClick={this.stepTwoComplete}
                  >
                    Continue
                  </button>
                )}
              </div>
            ) : null}

            {this.state.stepTwo ? (
              <div className="fourStepContent">
                <p>
                  <b>Your truth, your truth, your truth</b>
                </p>
                <p className="fourP">is your truth</p>
                {this.state.stepThree ? null : (
                  <button
                    className="fourStepBtn"
                    onClick={this.stepThreeComplete}
                  >
                    Continue
                  </button>
                )}
              </div>
            ) : null}

            {this.state.stepThree ? (
              <div className="fourStepContent">
                <p>
                  <b>Your truth, your truth, your truth</b>
                </p>
                <p className="fourP">is your truth</p>
                {this.state.stepFour ? null : (
                  <button
                    className="fourStepBtn"
                    onClick={this.stepFourComplete}
                  >
                    Continue
                  </button>
                )}
              </div>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export default FourSteps;
