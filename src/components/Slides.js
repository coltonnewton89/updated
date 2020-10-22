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
    this.setState({ stepCounter: 1 });
    localStorage.setItem("count", 1);
  };

  setBeginningDate = () => {
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    localStorage.setItem("loggedDate", tomorrow);

    this.setState({ stepCounter: 1 });
    localStorage.setItem("count", this.state.stepCounter);
  };

  lessThanTwoIncrement() {
    this.setState((state) => {
      return { stepCounter: state.stepCounter + 1 };
    });
  }

  togglePeace = () => {
     if (this.state.stepCounter <= 2) {
      this.setState({ stepCounter: this.state.stepCounter + 1 });
      localStorage.setItem("count", JSON.parse(localStorage.getItem("count")) + 1);
    } else if (this.state.stepCounter >= 3) {
      this.setState({ stepCounter: this.state.stepCounter + 1 });
      localStorage.setItem("count", JSON.parse(localStorage.getItem("count")) + 1);
    }
  };

  componentWillMount(){
    var today = new Date();
    let loggedDate = localStorage.getItem("loggedDate");
    
    if (loggedDate === null) {
      this.setBeginningDate();
    } else if (
      loggedDate.toString().substring(0, 15) ===
      today.toString().substring(0, 15)
    ) { this.changeDate(); }
    let _count = localStorage.getItem('count')
    let count = JSON.parse(localStorage.getItem("count"));
    if(_count == 'null'){localStorage.setItem("count", 1)}
    this.setState({ stepCounter: count });
  }

  componentDidMount(){
    if(this.state.stepCounter == 'null'){
      this.setState({stepCounter: 1})
      localStorage.setItem('count', 1)
    }
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
