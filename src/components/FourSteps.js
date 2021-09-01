import React, { Component } from "react";
import "../theme/FourSteps.css";
import Success from "../imgs/goodJob.png";
import { NavLink } from "react-router-dom";

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

  // glove = () => {
  //   const {gloveNotes} = this.props;
  //   this.props.gloveNotes
  // }

  componentDidMount = () => {
    const noteCrumb = localStorage.getItem('noteCrumb')
    this.setState({noteCrumb: noteCrumb})
    this.setState({priArr: localStorage.getItem("pain")})
    this.setState({copeArr: localStorage.getItem("cope")})
    this.setState({truthArr: localStorage.getItem("truth")})
    this.setState({responseArr: localStorage.getItem("response")})
    
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
            <br/>
            {this.state.noteCrumb == 'true' ? <button className="fourStepBtn" onClick={this.completeFourSteps}>
              Finish
            </button> : <button className="fourStepBtn"><NavLink
          to="/Notifications"
          style={{ color: "#F1FAEE", textDecoration:"none" }}          
          onClick={this.completeFourSteps}
        >
          Finish
        </NavLink></button>}
            
          </div>
        ) : (
          <div className="timelineContainer">
            <h2>Your Four Steps</h2>
            <div className="fourStepContent">
              <p className="fourB">
                <b>When you feel or believe you are {this.state.priArr.replace(/, ,/g, ", ")}</b>
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
                  <b>You might choose to become {this.state.copeArr.replace(/, ,/g, ", ")}</b>
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
                  <b>But you are {this.state.truthArr.replace(/, ,/g, ", ")}</b>
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
                  Which allows you to become {this.state.responseArr.replace(/, ,/g, ", ")} if you choose so.
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
