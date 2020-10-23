import React, { Component } from "react";
import painCycler from "../imgs/painCycler.png";
import swipeRight from "../imgs/swipeRight.png";
import changeAndInfluence from "../imgs/changeAndInfluence.png";
import firebase from "../FireConfig";

class PainCycle extends Component {
  state = {
    understood: false,
    continue: false,
    priArr: "",
    copeArr: "",
  };

  painFunction = () => {
    this.setState({ understood: true });
  };

  continueFunction = () => {
    this.setState({ continue: true });
  };

  finishPain = () => {
    const { togglePain } = this.props;
    this.props.togglePain();
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const currentUser = firebase.auth().currentUser.uid.toString();
        var priArrRef = firebase
          .firestore()
          .collection("usercycle")
          .doc(`${currentUser}_priArr`);
        var copeArrRef = firebase
          .firestore()
          .collection("usercycle")
          .doc(`${currentUser}_copeArr`);

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
      }
    });
  }

  render() {
    return (
      <div className="PainCycleContainer">
        {this.state.continue ? (
          <div style={{ textAlign: "center" }}>
            <h3>Try to remember:</h3>
            <li>
              You must take personal responsiblity to change your behavior
            </li>
            <li>Your change influences change around you.</li>
            <img
              className="changeAndInfluence"
              src={changeAndInfluence}
              alt="semi-red lightbulb stairing at reflection of normal lightbulb"
            />
            <button className="introPCSubmit" onClick={this.finishPain}>
              Finish Pain
            </button>
          </div>
        ) : (
          <div>
            {this.state.understood ? (
              <div style={{ textAlign: "center" }}>
                <h3>
                  You can swipe right from the Cycle page to edit your pain
                  cycle at any time.
                </h3>
                <br />
                <img
                  className="swiperRight"
                  src={swipeRight}
                  alt="image showing you will be able to swipe right"
                />
                <br />
                <button
                  className="introPCSubmit"
                  onClick={this.continueFunction}
                >
                  Continue
                </button>
              </div>
            ) : (
              <div style={{ textAlign: "center" }}>
                <h3>You've successfully set up your pain cycle. It might look something like this:</h3>
                <h4>When you feel or believe you are {this.state.priArr}</h4>
                <img
                  className="painCycler"
                  src={painCycler}
                  alt="image of red bulb angery at reflection of breaking bulb"
                />
                <h4>You might react by becoming {this.state.copeArr}</h4>
                <button className="painCycleSubmit" onClick={this.painFunction}>
                  Got it
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default PainCycle;
