import React, { Component } from "react";
import { IonSlides, IonSlide } from "@ionic/react";
import "../theme/Slides.css";
import PainBrain from "./PainBrain";
import PeaceBrain from "./PeaceBrain";
import FourSteps from "./FourSteps";
import PainGear from "./PainGear";
import PeaceGear from "./PeaceGear";

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

class Slides extends Component {
  state = {
    fourSteps: false,
    stepCounter: 0,
  };

  openFourSteps = () => {
    this.setState({ fourSteps: true });
  };

  closeFourSteps = () => {
    this.setState({ fourSteps: false });
  };

  completedFourSteps = () => {
    this.setState({ fourSteps: false });
    this.togglePeace();
  };

  changeDate = () => {
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    localStorage.setItem("loggedDate", tomorrow);
    localStorage.setItem("count", 1);
    this.setState({ stepCounter: 1 });
    console.log("changeDate");
  };

  setBeginningDate = () => {
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    localStorage.setItem("loggedDate", tomorrow);

    this.setState({ stepCounter: 1 });
    localStorage.setItem("count", this.state.stepCounter);
    console.log("setBeginningDate", this.state.stepCounter);
  };

  lessThanTwoIncrement() {
    this.setState((state) => {
      return { stepCounter: state.stepCounter + 1 };
    });
  }

  togglePeace = () => {
    //set state is throwing it off
    var today = new Date();
    let loggedDate = localStorage.getItem("loggedDate");
    let count = localStorage.getItem("count");
    if (loggedDate === null) {
      this.setBeginningDate();
    } else if (loggedDate === today) {
      this.changeDate();
    } else if (this.state.stepCounter <= 2) {
      this.setState({ stepCounter: this.state.stepCounter + 1 });
      localStorage.setItem("count", this.state.stepCounter);
      console.log("togglePeace less than 2", this.state.stepCounter, count);
    } else if (this.state.stepCounter >= 3) {
      this.setState({ stepCounter: this.state.stepCounter + 1 });
      localStorage.setItem("count", this.state.stepCounter);
      console.log("togglePeace greater than 3", this.state.stepCounter, count);
    }
  };

  componentDidMount() {
    let count = JSON.parse(localStorage.getItem("count"));
    this.setState({ stepCounter: count });
    console.log("componentDidMount");
  }

  render() {
    return (
      <IonSlides className="slides" options={slideOpts}>
        <IonSlide className="slideLeft">
          <PainGear />
        </IonSlide>

        <IonSlide className="slideCenter">
          {this.state.fourSteps ? (
            <FourSteps _completeFourSteps={this.completedFourSteps} />
          ) : this.state.stepCounter >= 3 ? (
            <PeaceBrain openFourSteps={this.openFourSteps} />
          ) : (
            <PainBrain openFourSteps={this.openFourSteps} />
          )}
        </IonSlide>

        <IonSlide className="slideRight">
          <PeaceGear />
        </IonSlide>
      </IonSlides>
    );
  }
}

export default Slides;
