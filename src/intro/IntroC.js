import React, { Component } from "react";
import firebase from "../FireConfig";
import triggerEvent from "../imgs/triggerEvent.png";

class IntroC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEvent: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  //input needs to be sent to the headspace section!
  //on submit also show video of where they can find this head space
  handleChange(e) {
    this.setState({ newEvent: e.target.value });
    console.log(this.state.newEvent);
  }

  clicked = () => {
    const currentUser = firebase.auth().currentUser.uid.toString();
    firebase
      .firestore()
      .collection("usercycle")
      .doc(`${currentUser}_event`)
      .set({ event: this.state.newEvent });
    console.log("submitted new event");
    const { toggleC } = this.props;
    this.props.toggleC();
    console.log("I was clicked");
    //firebase stuff goes here
  };

  render() {
    return (
      <div className="IntroCContainer">
        <div style={{ textAlign: "center" }}>
          <h3>
            Excellent. Now think of a real life situation where you had conflict
            or stuggled with negative feelings. (example: Fought with a friend
            last night, meeting someone and got nervous or got outraged around
            others.)
          </h3>
          <img
            className="triggerEvent"
            src={triggerEvent}
            alt="image of red lightbulb breaking"
          />
          <div>
            <form onSubmit={this.clicked}>
              <div className="customInput">
                <p>Please type your life situation here</p>
                <input
                  name="slidecInput"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Life Situation..."
                  required
                  className="inputLogin"
                />
              </div>
              <br />
              <button id="logBtn" type="submit" className="introBSubmit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroC;