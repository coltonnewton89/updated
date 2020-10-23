import React, { Component } from "react";
import firebase from "../FireConfig";
import castedLightBulb from "../imgs/castedLightBulb.png";

class IntroG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseArr: [],
      _responseArr: "",
      viewResponse: false,
    };
    this.pushCustomChoice = this.pushCustomChoice.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

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

  componentDidUpdate() {
    const currentUser = firebase.auth().currentUser.uid.toString();
    if (this.state.responseArr.length === 3) {
      firebase
        .firestore()
        .collection("usercycle")
        .doc(`${currentUser}_responseArr`)
        .set({
          responseArr: this.state.responseArr,
        });
      const { toggleG } = this.props;
      this.props.toggleG();
      console.log("should have sent to database");
    }
  }

  pushChoice = (e) => {
    var needle = this.state.responseArr.indexOf(e.target.value + ", ")
  if(needle > -1){
    this.state.responseArr.splice(needle, 1)
    e.target.style= null
  } else {
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
    e.target.style.backgroundColor = "rgb(33, 221, 224)";
    e.target.style.border = "1px solid #f1faee";
    e.target.style.scale = "1.3";
  };
  };

  render() {
    return (
      <div className="introGContainer">
        <div style={{ textAlign: "center" }}>
          <h4>
            When feeling your best, how would you want to respond in most situations? 
            Again, try to choose three words from below. I am or I can choose to be _____.
          </h4>
          <img
            className="castedLightBulb"
            src={castedLightBulb}
            alt="light bulb casting itself"
          />
          <div id="btnBackdrop">
            <div className="button-container">
              <button
                className="wordbank"
                value="Loving"
                onClick={this.pushChoice}
              >
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
              <button
                className="wordbank"
                value="Kind"
                onClick={this.pushChoice}
              >
                Kind
              </button>
              <button
                className="wordbank"
                value="Gentle"
                onClick={this.pushChoice}
              >
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
              <button
                className="wordbank"
                value="Humble"
                onClick={this.pushChoice}
              >
                Humble
              </button>
              <button
                className="wordbank"
                value="Respectful"
                onClick={this.pushChoice}
              >
                Respectful
              </button>
              <button
                className="wordbank"
                value="Joyful"
                onClick={this.pushChoice}
              >
                Joyful
              </button>
              <button
                className="wordbank"
                value="Hopeful"
                onClick={this.pushChoice}
              >
                Hopeful
              </button>
              <button
                className="wordbank"
                value="Open"
                onClick={this.pushChoice}
              >
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
              <button
                className="wordbank"
                value="Honest"
                onClick={this.pushChoice}
              >
                Honest
              </button>
              <button
                className="wordbank"
                value="Social"
                onClick={this.pushChoice}
              >
                Social
              </button>
              <form onSubmit={this.pushCustomChoice}>
                <input
                  className="inputLogin"
                  type="text"
                  id="custom"
                  placeholder="Type Custom Response Here"
                  value={this.state.value}
                  onChange={this.handleChange}
                />{" "}
                <br />
                <button type="submit" className="wordbankTwo">
                  Add Response
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroG;
