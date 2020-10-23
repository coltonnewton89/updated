import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
    noteCrumb: null,
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
    const noteCrumb = localStorage.getItem('noteCrumb')
    if(noteCrumb === null){
      localStorage.setItem('noteCrumb', 'true')
    }
    this.setState({noteCrumb: 'true'})
    const { _completeFourSteps } = this.props;
    this.props._completeFourSteps();
  };

  componentDidMount = () => {
    const noteCrumb = localStorage.getItem('noteCrumb')
    this.setState({noteCrumb: noteCrumb})
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
      }
    });
    copeArrRef.get().then((doc) => {
      if (doc.exists) {
        this.setState({ copeArr: doc.data().copeArr });
      }
    });
    truthArrRef.get().then((doc) => {
      if (doc.exists) {
        this.setState({ truthArr: doc.data().truthArr });
      }
    });
    responseArrRef.get().then((doc) => {
      if (doc.exists) {
        this.setState({ responseArr: doc.data().responseArr });
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
            {this.state.noteCrumb == 'true' ? <button className="fourStepBtn" onClick={this.completeFourSteps}>
              Got it
            </button> : <button className="fourStepBtn"><NavLink
          to="/Notifications"
          style={{ color: "#F1FAEE" }}          
          onClick={this.completeFourSteps}
        >
          Got it
        </NavLink></button>}
            
          </div>
        ) : (
          <div className="timelineContainer">
            <h2>Your Four Steps</h2>
            <div className="fourStepContent">
              <p className="fourB">
                <b>When you feel or believe you are {this.state.priArr}</b>
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
                  <b>You might choose to become {this.state.copeArr}</b>
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
                  <b>But you are {this.state.truthArr}</b>
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
                  <b>
                  Which allows you to become {this.state.responseArr} if you choose so.
                  </b>
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
