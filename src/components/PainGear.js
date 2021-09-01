import React, { Component } from "react";
import Gear from "../imgs/gear.png";
import "../theme/Gear.css";
import EditPain from "./EditPain";
import Checky from "../imgs/goodJob.png";

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
    this.setState({ priArr: localStorage.getItem("pain")});  
    this.setState({ copeArr: localStorage.getItem("cope")});      
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
            <h4 className="painPart">When you feel or believe you are {this.state.priArr.replace(/, ,/g, ", ")}</h4>
            <img className="gearImg" src={Gear} alt="Image of geare" />
            <button className="editCycle" onClick={this.toggleEdit}>
              Click here to edit Pain Cycle
            </button>
            <h4 className="copePart">
            You might choose to become {this.state.copeArr.replace(/, ,/g, ", ")} 
            </h4>
          </div>
        )}
      </div>
    );
  }
}

export default PainGear;
