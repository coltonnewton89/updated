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
    inPeace: false,
    fourSteps: false,
  };

  openFourSteps = () => {
    this.setState({ fourSteps: true });
  };

  closeFourSteps = () => {
    this.setState({ fourSteps: false });
  };

  completedFourSteps = () => {
    this.setState({ fourSteps: false });
    //plus add one to total
  };

  render() {
    return (
      <IonSlides className="slides" options={slideOpts}>
        <IonSlide className="slideLeft">
          <PainGear />
        </IonSlide>

        <IonSlide className="slideCenter">
          {this.state.fourSteps ? (
            <FourSteps _completeFourSteps={this.completedFourSteps} />
          ) : this.state.inPeace ? (
            <PeaceBrain onClick={this.openFourSteps} />
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
