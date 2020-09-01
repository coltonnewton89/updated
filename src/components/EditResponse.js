import React, { Component } from "react";
import firebase from "../FireConfig";

class EditResponse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      truthArr: "",
      responseArr: [],
      _responseArr: "",
    };
    this.pushCustomChoice = this.pushCustomChoice.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const currentUser = firebase.auth().currentUser.uid.toString();
    var truthArrRef = firebase
      .firestore()
      .collection("usercycle")
      .doc(`${currentUser}_truthArr`);
    truthArrRef.get().then((doc) => {
      if (doc.exists) {
        this.setState({ truthArr: doc.data().truthArr });
        console.log("fetched truthArr");
      }
    });
  };

  handleChange(e) {
    this.setState({ _responseArr: e.target.value });
  }

  pushCustomChoice(e) {
    e.preventDefault();
    if (this.state.responseArr.length <= 1) {
      this.setState({
        responseArr: this.state.responseArr.concat(
          this.state._responseArr + ", "
        ),
      });
    }
    if (this.state.responseArr.length == 2) {
      this.setState({
        responseArr: this.state.responseArr.concat(
          "and " + this.state._responseArr
        ),
      });
    }
    document.getElementById("custom").value = "";

    console.log(this.state.responseArr);
  }

  pushChoice = (e) => {
    if (this.state.responseArr.length <= 1) {
      this.setState({
        responseArr: this.state.responseArr.concat(e.target.value + ", "),
      });
    }
    if (this.state.responseArr.length == 2) {
      this.setState({
        responseArr: this.state.responseArr.concat("and " + e.target.value),
      });
    }

    console.log(this.state.responseArr);
  };

  clearAll = () => {
    this.setState({ responseArr: [] });
  };

  componentDidUpdate = () => {
    const currentUser = firebase.auth().currentUser.uid.toString();
    const { toggleUpdated } = this.props;
    if (this.state.responseArr.length === 3) {
      firebase
        .firestore()
        .collection("usercycle")
        .doc(`${currentUser}_responseArr`)
        .set({
          responseArr: this.state.responseArr,
        });
      this.props.toggleUpdated();
      console.log("should have sent to database");
    }
  };

  render() {
    return (
      <div>
        <p>Truth: "{this.state.truthArr}"</p>
        <p>
          <small>
            Now that you can see your truth, this makes you become _____.
          </small>
        </p>
        <div id="button-container">
          <button className="wordbank" value="Loving" onClick={this.pushChoice}>
            Loving
          </button>
          <button
            className="wordbank"
            value="Encouraging"
            onClick={this.pushChoice}
          >
            Encouraging
          </button>
          <button
            className="wordbank"
            value="Supportive"
            onClick={this.pushChoice}
          >
            Supportive
          </button>
          <button
            className="wordbank"
            value="Accepting"
            onClick={this.pushChoice}
          >
            Accepting
          </button>
          <button
            className="wordbank"
            value="Inclusive"
            onClick={this.pushChoice}
          >
            Inclusive
          </button>
          <button className="wordbank" value="Kind" onClick={this.pushChoice}>
            Kind
          </button>
          <button className="wordbank" value="Gentle" onClick={this.pushChoice}>
            Gentle
          </button>
          <button
            className="wordbank"
            value="Patient"
            onClick={this.pushChoice}
          >
            Patient
          </button>
          <button
            className="wordbank"
            value="Forgiving"
            onClick={this.pushChoice}
          >
            Forgiving
          </button>
          <button
            className="wordbank"
            value="Positive"
            onClick={this.pushChoice}
          >
            Positive
          </button>
          <button className="wordbank" value="Humble" onClick={this.pushChoice}>
            Humble
          </button>
          <button
            className="wordbank"
            value="Respectful"
            onClick={this.pushChoice}
          >
            Respectful
          </button>
          <button className="wordbank" value="Joyful" onClick={this.pushChoice}>
            Joyful
          </button>
          <button
            className="wordbank"
            value="Hopeful"
            onClick={this.pushChoice}
          >
            Hopeful
          </button>
          <button className="wordbank" value="Open" onClick={this.pushChoice}>
            Open
          </button>
          <button
            className="wordbank"
            value="Flexible"
            onClick={this.pushChoice}
          >
            Flexible
          </button>
          <button
            className="wordbank"
            value="Engageful"
            onClick={this.pushChoice}
          >
            Engageful
          </button>
          <button
            className="wordbank"
            value="Reliable"
            onClick={this.pushChoice}
          >
            Reliable
          </button>
          <button
            className="wordbank"
            value="Self-controlled"
            onClick={this.pushChoice}
          >
            Self-Controlled
          </button>
          <button
            className="wordbank"
            value="Affectionate"
            onClick={this.pushChoice}
          >
            Affectionate
          </button>
          <button
            className="wordbank"
            value="Collaborative"
            onClick={this.pushChoice}
          >
            Collaborative
          </button>
          <button className="wordbank" value="Honest" onClick={this.pushChoice}>
            Honest
          </button>
          <button className="wordbank" value="Social" onClick={this.pushChoice}>
            Social
          </button>
          <form onSubmit={this.pushCustomChoice}>
            <input
              type="text"
              id="custom"
              placeholder="Type Custom Response"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button type="submit" className="wordbank">
              Add Custom Response
            </button>
          </form>

          <br />
          <button className="wordbank" onClick={this.clearAll}>
            Clear All
          </button>
          <p className="list">
            <span>{this.state.responseArr}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default EditResponse;
