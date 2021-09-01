import React, { Component } from "react";
import "../theme/EditCycle.css";
import ContinueCopeEdit from "./ContinueCopeEdit";
import ContinuePainEdit from "./ContinuePainEdit";

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
    localStorage.setItem("event", this.state.newEvent)
    console.log("submitted new event");
    this.continueEdit();
  };

  componentDidMount = () => {
    this.setState({ event: localStorage.getItem("event") });      
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
                The event is the start of how all this happened. If this hasn't
                changed, just click continue. If there is a new event however,
                please type in a new event and click "Change Event."     
                </small>         
            </p>
            <input
              type="text"
              className="inputEvent"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="New Event..."
            />
            <br />
            <button
              type="submit"
              className="changeSubmit"
              onClick={this.submitNewEvent}
            >
              Change Event
            </button>
            <br />
            <button className="changeSubmit" onClick={this.continueEdit}>
              Continue
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default EditPain;
