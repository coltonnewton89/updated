import React, { Component } from "react";
import "../theme/EditCycle.css";
import firebase from "../FireConfig";
import ContinueCopeEdit from "./ContinueCopeEdit";
import ContinuePainEdit from "./ContinuePainEdit";
import triggerEvent from "../imgs/triggerEvent.png";

class EditPain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      continueEdit: false,
      continuePain: false,
      almostDone: false,
      newEvent: "",
      event: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ newEvent: e.target.value });
    console.log(this.state.newEvent);
  }

  submitNewEvent = () => {
    const currentUser = firebase.auth().currentUser.uid.toString();
    firebase
      .firestore()
      .collection("usercycle")
      .doc(`${currentUser}_event`)
      .set({ event: this.state.newEvent });
    console.log("submitted new event");
    this.continueEdit();
  };

  componentDidMount = () => {
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
  };

  continueEdit = () => {
    this.setState({ continueEdit: !this.state.continueEdit });
  };

  toggleDisplayPain = () => {
    this.setState({ continuePain: !this.state.continuePain });
    this.continueEdit();
  };

  toggleAlmost = () => {
    const { finished } = this.props;
    this.props.finished();
    console.log("editPain AlmostFinished");
  };

  render() {
    return (
      <div className="EditContainer">
        {this.state.continueEdit ? (
          <ContinueCopeEdit toggleDisplayPain={this.toggleDisplayPain} />
        ) : this.state.continuePain ? (
          <ContinuePainEdit toggleAlmost={this.toggleAlmost} />
        ) : (
          <div className="event">
            <p className="eventP">Event: "{this.state.event}"</p>
            <p>
              <small>
                The event is the start of how all this happened. If this is the
                same just click continue. If there is a new event that took
                place, please type in a new event and click change event
              </small>
            </p>
            <img
              className="triggerEvent"
              src={triggerEvent}
              alt="image of red lightbulb breaking"
            />
            <input
              type="text"
              className="inputLogin"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="New Event..."
            />
            <button
              type="submit"
              className="changeSubmit"
              onClick={this.submitNewEvent}
            >
              Change Event
            </button>
            <button className="editContinue" onClick={this.continueEdit}>
              Continue
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default EditPain;
