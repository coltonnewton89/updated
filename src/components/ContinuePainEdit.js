import React, { Component } from "react";
import firebase from "../FireConfig";

class ContinuePainEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priArr: [],
      _priArr: "",
      viewPain: false,
      event: "",
    };
    this.pushCustomChoice = this.pushCustomChoice.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ _priArr: e.target.value });
  }

  pushCustomChoice(e) {
    e.preventDefault();
    if (this.state.priArr.length <= 1) {
      this.setState({
        priArr: this.state.priArr.concat(this.state._priArr + ", "),
      });
    }
    if (this.state.priArr.length === 2) {
      this.setState({
        priArr: this.state.priArr.concat("and " + this.state._priArr),
      });
    }
    document.getElementById("custom").value = "";
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

    if (this.state.priArr.length === 3) {
      firebase
        .firestore()
        .collection("usercycle")
        .doc(`${currentUser}_priArr`)
        .set({
          priArr: this.state.priArr,
        })
        .catch((err) => {
          alert(err);
        });
      console.log("priArr was submitted");
      const { toggleAlmost } = this.props;
      this.props.toggleAlmost();
    }
  }

  pushChoice = (e) => {
    if (this.state.priArr.length <= 1) {
      this.setState({
        priArr: this.state.priArr.concat(e.target.value + ", "),
      });
    }
    if (this.state.priArr.length === 2) {
      this.setState({
        priArr: this.state.priArr.concat("and " + e.target.value),
      });
    }
  };

  clearAll = () => {
    this.setState({ priArr: [] });
  };

  render() {
    return (
      <div>
        <p>{this.state.event}</p>
        <p>
          <small>
            When this event took place, What were you feeling or believing?
          </small>
        </p>
        <div id="button-container">
          <button
            className="wordbank"
            value="Unloved"
            onClick={this.pushChoice}
          >
            Unloved
          </button>
          <button
            className="wordbank"
            value="Unworthy"
            onClick={this.pushChoice}
          >
            Unworthy
          </button>
          <button
            className="wordbank"
            value="Insignificant"
            onClick={this.pushChoice}
          >
            Insignificant
          </button>
          <button className="wordbank" value="Alone" onClick={this.pushChoice}>
            Alone
          </button>
          <button
            className="wordbank"
            value="Worthless"
            onClick={this.pushChoice}
          >
            Worthless
          </button>
          <button
            className="wordbank"
            value="Devalued"
            onClick={this.pushChoice}
          >
            Devalued
          </button>
          <button
            className="wordbank"
            value="Defective"
            onClick={this.pushChoice}
          >
            Defective
          </button>
          <button
            className="wordbank"
            value="Inadequate"
            onClick={this.pushChoice}
          >
            Inadequate
          </button>
          <button
            className="wordbank"
            value="Rejected"
            onClick={this.pushChoice}
          >
            Rejected
          </button>
          <button
            className="wordbank"
            value="Unacceptable"
            onClick={this.pushChoice}
          >
            Unacceptable
          </button>
          <button
            className="wordbank"
            value="Hopeless"
            onClick={this.pushChoice}
          >
            Hopeless
          </button>
          <button
            className="wordbank"
            value="Unwanted"
            onClick={this.pushChoice}
          >
            Unwanted
          </button>
          <button
            className="wordbank"
            value="Abandoned"
            onClick={this.pushChoice}
          >
            Abandoned
          </button>
          <button className="wordbank" value="Unsafe" onClick={this.pushChoice}>
            Unsafe
          </button>
          <button
            className="wordbank"
            value="Insecure"
            onClick={this.pushChoice}
          >
            Insecure
          </button>
          <button
            className="wordbank"
            value="A Failure"
            onClick={this.pushChoice}
          >
            A Failure
          </button>
          <button
            className="wordbank"
            value="Fearful"
            onClick={this.pushChoice}
          >
            Fearful
          </button>
          <button
            className="wordbank"
            value="Powerless"
            onClick={this.pushChoice}
          >
            Powerless
          </button>
          <button
            className="wordbank"
            value="Out of Controll"
            onClick={this.pushChoice}
          >
            Out of Control
          </button>
          <button
            className="wordbank"
            value="Controlled"
            onClick={this.pushChoice}
          >
            Controlled
          </button>
          <button
            className="wordbank"
            value="Vulnerable"
            onClick={this.pushChoice}
          >
            Vulnerable
          </button>
          <button
            className="wordbank"
            value="Disconnected"
            onClick={this.pushChoice}
          >
            Disconnected
          </button>
          <button
            className="wordbank"
            value="Betrayed"
            onClick={this.pushChoice}
          >
            Betrayed
          </button>
          <button
            className="wordbank"
            value="Invalidated"
            onClick={this.pushChoice}
          >
            Invalidated
          </button>
          <button
            className="wordbank"
            value="Not Good Enough"
            onClick={this.pushChoice}
          >
            Not Good Enough
          </button>
          <form onSubmit={this.pushCustomChoice}>
            <input
              type="text"
              id="custom"
              placeholder="Type Custom Pain Here"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button type="submit" className="wordbank">
              Add custom pain
            </button>
          </form>

          <br />
          <button className="wordbankClear" onClick={this.clearAll}>
            Clear All
          </button>
          <p className="list">
            <span style={{ marginBottom: "-300px" }}>{this.state.priArr}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default ContinuePainEdit;
