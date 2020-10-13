import React, { Component } from "react";
import "../theme/Challenges.css";
import { workshopChallenges } from "../db/Workshop";

class Challenges extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      selectedNumber: null,
      acceptedNumber: null,
      daysLeft: null,
      congrats: false,
      displayCurrent: false,
    };
    this.acceptedNumber = this.acceptedNumber.bind(this);
    this.pushChoice = this.pushChoice.bind(this);
  }

  acceptedNumber = (e) => {
    workshopChallenges.map((challenge) => {
      if (challenge.id == e.target.value) {
        localStorage.setItem("userChallengeRemainder", challenge.days);
      }
    });
    localStorage.setItem("userAcceptedNumber", e.target.value);
    this.clearAll();
    this.componentDidMount();
  };

  pushChoice = (e) => {
    this.setState({ selectedNumber: e.target.value });
  };

  clearAll = () => {
    this.setState({ selectedNumber: null });
  };

  congrats = () => {
    this.setState({ congrats: true });
    console.log("I should have toggled congrats");
  };

  _congrats = () => {
    this.setState({ congrats: false });
    localStorage.setItem("userChallengeRemainder", null);
    localStorage.setItem("userAcceptedNumber", null);
    this.componentDidMount();
  };

  //share challenge img, title and body with link to facebook
  shareContent = () => {
    alert(
      "We apologize! Hopefully we can get this function up by Beta testing. Thank you for understanding and again, congratulations on completing your challenge!"
    );
    this._congrats();
  };

  completeToday = () => {
    let days = localStorage.getItem("userChallengeRemainder");
    if (days - 1 > 0) {
      localStorage.setItem("userChallengeRemainder", days - 1);
      this.setState({ daysLeft: days - 1 });
      alert(
        `Keep it up! You have ${
          this.state.daysLeft - 1
        } day(s) left until you complete this challenge!`
      );
    }
    if (days - 1 == 0) {
      this.congrats();
    }
  };

  componentDidMount = () => {
    let currentChallenge = localStorage.getItem("userAcceptedNumber");
    let days = localStorage.getItem("userChallengeRemainder");
    this.setState({ acceptedNumber: currentChallenge });
    this.setState({ daysLeft: days });
  };

  render() {
    return (
      <div className="challengeContainer">
        {/* =current challenge= */}
        {this.state.acceptedNumber
          ? workshopChallenges.map((challenge) => {
              if (this.state.acceptedNumber == challenge.id) {
                return (
                  <div className="currentChallenge">
                    {this.state.congrats ? (
                      <div>
                        <h2>Congratulations!</h2>
                        <p>
                          We wanted to congratulate you on completing your
                          challenge! From here, you can share your completed
                          challenge, possibly challenging others to do so,
                          and/or accept a new challenge.
                        </p>
                        <small>
                          Do you wish to post this on facebook? This will appear
                          as a post on your feed.
                        </small>
                        <div className="challengeBtnContainer">
                          <button
                            className="challengeDivBtn"
                            onClick={this.shareContent}
                          >
                            Share
                          </button>
                          <button
                            className="challengeDivCancel"
                            onClick={this._congrats}
                          >
                            No Thanks
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <img className="challengeDivImg" src={challenge.img} />
                        <h4 className="challengeDivTitle">{challenge.title}</h4>
                        <button
                          className="challengeDivBtn"
                          onClick={this.completeToday}
                        >
                          Completed Today's Challenge
                        </button>
                        <p>Days Left: {this.state.daysLeft}</p>
                      </div>
                    )}
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
                <img className="challengeDivImg" src={challenge.img} />
                <h2>{challenge.title}</h2>
                <p>{challenge.body}</p>
                <a href="/Workshop">
                  <button
                    className="challengeDivBtn"
                    value={challenge.id}
                    onClick={this.acceptedNumber}
                  >
                    Accept
                  </button>
                </a>

                <br />
                <button className="challengeDivCancel" onClick={this.clearAll}>
                  Cancel
                </button>
              </div>
            );
          }

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
        })}
      </div>
    );
  }
}

export default Challenges;
