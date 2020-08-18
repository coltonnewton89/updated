import React, { Component } from "react";
import firebase from "../FireConfig";
import Gear from "../imgs/gear.png";
import "../theme/Gear.css";
import EditPeace from "./EditPeace";
import EditResponse from "./EditResponse";
import Checky from "../imgs/checky.png";

class PeaceGear extends Component {
  state = {
    openPeace: false,
    openResponse: false,
    openUpdated: false,
    truthArr: "",
    responseArr: "",
  };

  toggleOpenPeace = () => {
    this.setState({ openPeace: true, openResponse: false, openUpdated: false });
  };

  toggleOpenResponse = () => {
    this.toggleOpenPeace();
    this.setState({ openPeace: false, openResponse: true, openUpdated: false });
  };

  toggleUpdated = () => {
    this.setState({ openPeace: false, openResponse: false, openUpdated: true });
  };

  returnGear = () => {
    this.setState({
      openPeace: false,
      openResponse: false,
      openUpdated: false,
    });
    console.log("I am completely finished!");
  };

  componentWillReceiveProps = () => {
    const currentUser = firebase.auth().currentUser.uid.toString();
    var truthArrRef = firebase
      .firestore()
      .collection("usercycle")
      .doc(`${currentUser}_truthArr`);
    truthArrRef.get().then((doc) => {
      if (doc.exists) {
        this.setState({ truthArr: doc.data().truthArr });
      }
    });
    var responseArrRef = firebase
      .firestore()
      .collection("usercycle")
      .doc(`${currentUser}_responseArr`);
    responseArrRef.get().then((doc) => {
      if (doc.exists) {
        this.setState({ responseArr: doc.data().responseArr });
      }
    });
    console.log("i pulled truth");
    console.log("i pulled response");
  };

  render() {
    return (
      <div>
        {this.state.openPeace ? (
          <EditPeace toggleResponse={this.toggleOpenResponse} />
        ) : this.state.openResponse ? (
          <EditResponse toggleUpdated={this.toggleUpdated} />
        ) : this.state.openUpdated ? (
          <div className="updated">
            <p>You have updated your Peace Cycle</p>
            <img
              src={Checky}
              className="thumbsUp"
              alt="Green circle with check mark in center"
            />
            <button className="finish" onClick={this.returnGear}>
              Finish
            </button>
          </div>
        ) : (
          <div className="GearContainer">
            <p className="truthPart">{this.state.truthArr}</p>
            <img className="gearImg" src={Gear} alt="Image of geare" />
            <button className="editCycle" onClick={this.toggleOpenPeace}>
              Click here to edit Peace Cycle
            </button>
            <p className="reactPart">{this.state.responseArr}</p>
          </div>
        )}
      </div>
    );
  }
}

export default PeaceGear;
