import React, { Component } from "react";
import Gear from "../imgs/gear.png";
import "../theme/Gear.css";
import EditPeace from "./EditPeace";
import EditResponse from "./EditResponse";
import Checky from "../imgs/goodJob.png";

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

  componentDidMount() {    
    this.setState({ truthArr: localStorage.getItem("truth")});     
    this.setState({ responseArr: localStorage.getItem("response")});         
  }

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
            <h4 className="truthPart">Try to remember that you are {this.state.truthArr.replace(/, ,/g, ", ")}</h4>
            <img className="gearImg" src={Gear} alt="Image of gear" />
            <button className="editCycle" onClick={this.toggleOpenPeace}>
              Click here to edit Peace Cycle
            </button>
            <h4 className="reactPart">
              Which allows you to become {this.state.responseArr.replace(/, ,/g, ", ")} if you choose so.
            </h4>
          </div>
        )}
      </div>
    );
  }
}

export default PeaceGear;
