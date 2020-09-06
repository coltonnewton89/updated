import React, { Component } from "react";
import firebase from "../FireConfig";
import "../theme/FourSteps.css";
import Success from "../imgs/goodJob.png";

class FourSteps extends Component {
  state = {
    stepOne: false,
    stepTwo: false,
    stepThree: false,
    stepFour: false,
    priArr: "",
    copeArr: "",
    truthArr: "",
    responseArr: "",
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

  componentDidMount = () => {
    const currentUser = firebase.auth().currentUser.uid.toString();
    var priArrRef = firebase
      .firestore()
      .collection("usercycle")
      .doc(`${currentUser}_priArr`);
    var copeArrRef = firebase
      .firestore()
      .collection("usercycle")
      .doc(`${currentUser}_copeArr`);
    var truthArrRef = firebase
      .firestore()
      .collection("usercycle")
      .doc(`${currentUser}_truthArr`);
    var responseArrRef = firebase
      .firestore()
      .collection("usercycle")
      .doc(`${currentUser}_responseArr`);

    priArrRef.get().then((doc) => {
      if (doc.exists) {
        this.setState({ priArr: doc.data().priArr });
        console.log("pulled pri");
      }
    });
    copeArrRef.get().then((doc) => {
      if (doc.exists) {
        this.setState({ copeArr: doc.data().copeArr });
        console.log("pulled cope");
      }
    });
    truthArrRef.get().then((doc) => {
      if (doc.exists) {
        this.setState({ truthArr: doc.data().truthArr });
        console.log("pulled truth");
      }
    });
    responseArrRef.get().then((doc) => {
      if (doc.exists) {
        this.setState({ responseArr: doc.data().responseArr });
        console.log("pulled response");
      }
    });
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
            <h2>Your Four Steps</h2>
            <div className="fourStepContent">
              <p className="fourB">
                <b>"{this.state.priArr}" is your pain.</b>
              </p>
              {this.state.stepOne ? null : (
                <button className="fourStepBtn" onClick={this.stepOneComplete}>
                  Continue
                </button>
              )}
            </div>

            {this.state.stepOne ? (
              <div className="fourStepContent">
                <p className="fourB">
                  <b>Which leads you to/to become: "{this.state.copeArr}"</b>
                </p>
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
                <p className="fourB">
                  <b>But you are: "{this.state.truthArr}"</b>
                </p>
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
                <p className="fourB">
                  <b>Which allows you to beome: "{this.state.responseArr}"</b>
                </p>
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
