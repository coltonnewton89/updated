import React, { Component } from "react";
import Slides from "../components/Slides";
import MasterIntro from "../components/MasterIntro";
import "../theme/Cycle.css";
import Notes from '../notifications/Notifications'

class Cycle extends Component {
  state = {
    crumb: null,
  };

  toggleMasterIntro = () => {
    localStorage.setItem("cupcake", "crumb");
    this.componentDidMount();
  };

  componentDidMount() {
    localStorage.getItem("cupcake") &&
      this.setState({ crumb: localStorage.getItem("cupcake") });
  }

  render() {
    if (this.state.crumb === "crumb") {
      return (
        <div className="cycleContainer">
          <Notes/>
          <Slides />
        </div>
      );
    } else {
      return <MasterIntro toggleMasterIntro={this.toggleMasterIntro} />;
    }
  }
}

export default Cycle;
