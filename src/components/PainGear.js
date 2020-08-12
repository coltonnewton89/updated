import React, { Component } from "react";
import Gear from "../imgs/gear.png";
import "../theme/Gear.css";
import EditPain from "./EditPain";
import Checky from "../imgs/checky.png";
import firebase from "../FireConfig";

class PainGear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      almost: false,
      priArr: "",
      copeArr: "",
    };
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  finished = () => {
    this.toggleAlmost();
    console.log("I'm almost finished");
  };

  toggleAlmost = () => {
    this.setState({ almost: !this.state.almost });
    this.toggleEdit();
  };

  returnGear = () => {
    this.setState({ edit: false, almost: false });
    console.log("I am completely finished!");
  };

  componentWillReceiveProps() {
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

  render() {
    return (
      <div>
        {this.state.edit ? (
          <EditPain finished={this.finished} />
        ) : this.state.almost ? (
          <div className="updated">
            <p>You have updated your Pain Cycle</p>
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
            <p className="painPart">"{this.state.priArr}" is your pain</p>
            <img className="gearImg" src={Gear} alt="Image of geare" />
            <button className="editCycle" onClick={this.toggleEdit}>
              Click here to edit Pain Cycle
            </button>
            <p className="copePart">Which leads you "{this.state.copeArr}"</p>
          </div>
        )}
      </div>
    );
  }
}

export default PainGear;
