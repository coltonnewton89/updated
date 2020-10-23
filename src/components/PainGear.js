import React, { Component } from "react";
import Gear from "../imgs/gear.png";
import "../theme/Gear.css";
import EditPain from "./EditPain";
import Checky from "../imgs/goodJob.png";
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
  };

  toggleAlmost = () => {
    this.setState({ almost: !this.state.almost });
    this.toggleEdit();
  };

  returnGear = () => {
    this.setState({ edit: false, almost: false });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
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
            <h4 className="painPart">When you feel or believe you are {this.state.priArr}</h4>
            <img className="gearImg" src={Gear} alt="Image of geare" />
            <button className="editCycle" onClick={this.toggleEdit}>
              Click here to edit Pain Cycle
            </button>
            <h4 className="copePart">
            You might choose to become {this.state.copeArr} 
            </h4>
          </div>
        )}
      </div>
    );
  }
}

export default PainGear;
