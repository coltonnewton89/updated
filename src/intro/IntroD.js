import React, { Component } from "react";
import firebase from "../FireConfig";
import selfReflection from "../imgs/selfReflection.png";

class IntroD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copeArr: [],
      _copeArr: "",
      viewCope: false,
      event: "",
    };
    this.pushCustomChoice = this.pushCustomChoice.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ _copeArr: e.target.value });
  }

  pushCustomChoice(e) {
    e.preventDefault();
    if (this.state.copeArr.length <= 1) {
      this.setState({
        copeArr: this.state.copeArr.concat(this.state._copeArr + ", "),
      });
    }
    if (this.state.copeArr.length === 2) {
      this.setState({
        copeArr: this.state.copeArr.concat("and " + this.state._copeArr),
      });
    }
    document.getElementById("custom").value = "";

    console.log(this.state.copeArr);
  }

  componentDidUpdate() {
    const currentUser = firebase.auth().currentUser.uid.toString();
    if (this.state.copeArr.length === 3) {
      firebase
        .firestore()
        .collection("usercycle")
        .doc(`${currentUser}_copeArr`)
        .set({
          copeArr: this.state.copeArr,
        });
      console.log("should have sent to database");
      const { toggleD } = this.props;
      this.props.toggleD();
    }
  }

  componentDidMount() {
    const currentUser = firebase.auth().currentUser.uid.toString();
    var eventRef = firebase
      .firestore()
      .collection("usercycle")
      .doc(`${currentUser}_event`);
    eventRef.get().then((doc) => {
      if (doc.exists) {
        this.setState({ event: doc.data().event });
      }
    });
  }

  pushChoice = (e) => {
    if (this.state.copeArr.length <= 1) {
      this.setState({
        copeArr: this.state.copeArr.concat(e.target.value + ", "),
      });
    }
    if (this.state.copeArr.length === 2) {
      this.setState({
        copeArr: this.state.copeArr.concat("and " + e.target.value),
      });
    }

    console.log(this.state.copeArr);
  };

  clearAll = () => {
    this.setState({ copeArr: [] });
  };

  render() {
    return (
      <div className="introDContainer">
        <div style={{ textAlign: "center" }}>
          <h3>You said: {this.state.event}</h3>
          <h4>
            Now, true confession time. How did you act in this situation? "I
            started to / I become _____"
          </h4>
          <img
            className="selfReflection"
            src={selfReflection}
            alt="image of lightbuld looking into mirror"
          />

          <div id="button-container">
            <button
              className="wordbank"
              value="Criticize"
              onClick={this.pushChoice}
            >
              Criticize
            </button>
            <button
              className="wordbank"
              value="Angry"
              onClick={this.pushChoice}
            >
              Angry
            </button>
            <button
              className="wordbank"
              value="Sarcastic"
              onClick={this.pushChoice}
            >
              Sarcastic
            </button>
            <button
              className="wordbank"
              value="Aggressive"
              onClick={this.pushChoice}
            >
              Aggressive
            </button>
            <button
              className="wordbank"
              value="Hold a Grudge"
              onClick={this.pushChoice}
            >
              Hold a Grudge
            </button>
            <button
              className="wordbank"
              value="Withdraw"
              onClick={this.pushChoice}
            >
              Withdraw
            </button>
            <button
              className="wordbank"
              value="Self Shame"
              onClick={this.pushChoice}
            >
              Self Shame
            </button>
            <button
              className="wordbank"
              value="Depressed"
              onClick={this.pushChoice}
            >
              Depressed
            </button>
            <button
              className="wordbank"
              value="Anxious"
              onClick={this.pushChoice}
            >
              Anxious
            </button>
            <button
              className="wordbank"
              value="Inconsolable"
              onClick={this.pushChoice}
            >
              Inconsolable
            </button>
            <button
              className="wordbank"
              value="Exagerate"
              onClick={this.pushChoice}
            >
              Exagerate
            </button>
            <button
              className="wordbank"
              value="Self-Harmful"
              onClick={this.pushChoice}
            >
              Self-Harmful
            </button>
            <button
              className="wordbank"
              value="Performance Driven"
              onClick={this.pushChoice}
            >
              Performance Driven
            </button>
            <button
              className="wordbank"
              value="Defensive"
              onClick={this.pushChoice}
            >
              Defensive
            </button>
            <button
              className="wordbank"
              value="Demanding"
              onClick={this.pushChoice}
            >
              Demanding-
            </button>
            <button className="wordbank" value="Numb" onClick={this.pushChoice}>
              Numb
            </button>
            <button
              className="wordbank"
              value="Selfish"
              onClick={this.pushChoice}
            >
              Selfish
            </button>
            <button
              className="wordbank"
              value="Obsessed"
              onClick={this.pushChoice}
            >
              Obsessed
            </button>
            <button
              className="wordbank"
              value="Irresponsible"
              onClick={this.pushChoice}
            >
              Irresponsible
            </button>
            <button
              className="wordbank"
              value="Impulsive"
              onClick={this.pushChoice}
            >
              Impulsive
            </button>
            <button
              className="wordbank"
              value="Avoidant"
              onClick={this.pushChoice}
            >
              Avoidant
            </button>
            <button
              className="wordbank"
              value="Minimize"
              onClick={this.pushChoice}
            >
              Minimize
            </button>

            <form onSubmit={this.pushCustomChoice}>
              <input
                className="inputLogin"
                type="text"
                id="custom"
                placeholder="Type Custom Cope Here"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button type="submit" className="wordbankTwo">
                Add A Custom Cope
              </button>
            </form>
            {this.state.copeArr}
            <br />
            <button className="wordbank" onClick={this.clearAll}>
              Clear All
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroD;
