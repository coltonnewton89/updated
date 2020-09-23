import React, { Component } from "react";
import Slides from "../components/Slides";
import MasterIntro from "../components/MasterIntro";
import IntroD from "../intro/IntroD";
import "../theme/Cycle.css";

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
          <Slides />
        </div>
      );
    } else {
      return <MasterIntro toggleMasterIntro={this.toggleMasterIntro} />;
    }
  }
}

export default Cycle;
