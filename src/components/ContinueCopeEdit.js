import React, { Component } from "react";
import firebase from "../FireConfig";

class ContinueCopeEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cope: true,
      copeArr: [],
      _copeArr: "",
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
      const { toggleDisplayPain } = this.props;
      this.props.toggleDisplayPain();
    }
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
    e.target.style.backgroundColor = "rgb(33, 221, 224)";
    e.target.style.border = "1px solid #f1faee";
    e.target.style.scale = "1.3";

    console.log(this.state.copeArr);
  };

  clearAll = () => {
    this.setState({ copeArr: [] });
  };

  render() {
    return (
      <div className="continuePainEditContainer">
        <div>
          <p>"{this.state.event}"</p>
          <p>
            <small>
              How did you act when this took place? I started to get or I became
              _____.
            </small>
          </p>
          <div id="button-container">
            <button
              className="wordbank"
              value="Criticizing"
              onClick={this.pushChoice}
            >
              Criticizing
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
              value="Grudgeful"
              onClick={this.pushChoice}
            >
              Grudgeful
            </button>
            <button
              className="wordbank"
              value="Withdrawing"
              onClick={this.pushChoice}
            >
              Withdrawing
            </button>
            <button
              className="wordbank"
              value="Self Shame"
              onClick={this.pushChoice}
            >
              Self Shameful
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
              value="Exagerative"
              onClick={this.pushChoice}
            >
              Exagerative
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
              Demanding
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
              value="Minimizing"
              onClick={this.pushChoice}
            >
              Minimizing
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
                Add Cope
              </button>
            </form>

            <br />
            <button className="wordbankClear" onClick={this.clearAll}>
              Clear All
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContinueCopeEdit;
