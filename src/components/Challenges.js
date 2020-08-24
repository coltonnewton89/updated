import React, { Component } from "react";
import "../theme/Challenges.css";
import { workshopChallenges } from "../db/Workshop";

class Challenges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNumber: null,
      acceptedNumber: null,
      displayCurrent: false,
    };
    this.acceptedNumber = this.acceptedNumber.bind(this);
    this.pushChoice = this.pushChoice.bind(this);
  }

  acceptedNumber = (e) => {
    this.setState({ acceptedNumber: e.target.value });
    this.clearAll();
  };

  pushChoice = (e) => {
    if (this.state.selectedNumber === null) {
      this.setState({ selectedNumber: e.target.value });
    }
  };

  clearAll = () => {
    this.setState({ selectedNumber: null });
  };

  render() {
    return (
      <div className="challengeContainer">
        {this.state.acceptedNumber
          ? workshopChallenges.map((challenge) => {
              if (this.state.acceptedNumber == challenge.id) {
                return (
                  <div className="currentChallenge">
                    <img className="challengeImg" src={challenge.img} />
                    <h4 className="challengeTitle">{challenge.title}</h4>
                    <p className="challengeBody">
                      {challenge.body.length > 30
                        ? `${challenge.body.substring(0, 30)}...`
                        : challenge.body}
                    </p>
                    <p>
                      <small>Current Challenge</small>
                    </p>
                  </div>
                );
              }
            })
          : null}
        {workshopChallenges.map((challenge) => {
          if (this.state.selectedNumber == challenge.id) {
            //large
            return (
              <div className="challengeDiv">
                <img className="challengeDivImg" src={challenge.img} alt="" />
                <h2>{challenge.title}</h2>
                <p>{challenge.body}</p>
                <button
                  className="challengeDivBtn"
                  value={challenge.id}
                  onClick={this.acceptedNumber}
                >
                  Accept
                </button>
                <br />
                <button className="challengeDivCancel" onClick={this.clearAll}>
                  Cancel
                </button>
              </div>
            );
          } else if (this.state.selectedNumber === null) {
            //small
            return (
              <div className="challengeCard">
                <img src={challenge.img} className="challengeCardImg" />
                <div className="challengeCardRight">
                  <h4 className="challengeCardTitle">{challenge.title}</h4>
                  <p className="challengeCardBody">
                    {challenge.body.length > 30
                      ? `${challenge.body.substring(0, 30)}...`
                      : challenge.body}
                  </p>
                  <button
                    className="challengeCardView"
                    value={challenge.id}
                    onClick={this.pushChoice}
                  >
                    View
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Challenges;
