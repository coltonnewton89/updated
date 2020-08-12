import React, { Component } from "react";
import Gear from "../imgs/gear.png";
import "../theme/Gear.css";

class PeaceGear extends Component {
  state = {};
  render() {
    return (
      <div className="GearContainer">
        <p className="truthPart">Truth, truth, and Your Truth is Your TruTh</p>
        <img className="gearImg" src={Gear} alt="Image of geare" />
        <button className="editCycle">Click here to edit Pain Cycle</button>
        <p className="reactPart">
          Which makes you become, react, ReAcT and reaction.
        </p>
      </div>
    );
  }
}

export default PeaceGear;
