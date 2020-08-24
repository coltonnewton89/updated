import React, { Component } from "react";
import "../theme/Workshop.css";
import Challenges from "../components/Challenges";

class Workshop extends Component {
  state = {};
  render() {
    return (
      <div className="workshopContainer">
        <Challenges />
      </div>
    );
  }
}

export default Workshop;
