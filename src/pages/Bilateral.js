import React, { Component } from "react";
import RotateImg from "../imgs/rotatePhone.png";
import leftBtn from "../imgs/bilatLeftBtn.png";
import rightBtn from "../imgs/bilatRightBtn.png";
import bilatAudio from "../audio/bilatAudio.wav";
import "../theme/Bilateral.css";

class Bilateral extends Component {
  state = {
    class: "",
    start: false,
  };

  viewRight = () => {
    this.setState({ class: "ViewRight" });
  };

  viewLeft = () => {
    this.setState({ class: "ViewLeft" });
  };

  start = () => {
    this.setState({ start: true });
    this.viewRight();
  };
  render() {
    return (
      <div className="bilateralContainer">
        <div className="portraitDiv">
          <img
            className="rotateImg"
            src={RotateImg}
            alt="phone rotating to landscape"
          />
          <h2>Please rotate your phone to landscape mode.</h2>
          <p>
            Make sure auto-rotation and media volume is on with-in your phone
            settings.
          </p>
        </div>
        <div className="landscapeDiv">
          {this.state.start ? (
            <div className="buttonRow">
              <div
                className={`leftBtnContainer${this.state.class}`}
                onClick={this.viewRight}
              >
                <img
                  className="reminderImg"
                  src={leftBtn}
                  alt="we're working torwards a non-visual version"
                />
              </div>

              <div className="gap">
                <audio src={bilatAudio} autoPlay></audio>
              </div>

              <div
                className={`rightBtnContainer${this.state.class}`}
                onClick={this.viewLeft}
              >
                <img
                  className="reminderImg"
                  src={rightBtn}
                  alt="we're working torwards a non-visual version"
                />
              </div>
            </div>
          ) : (
            <div className="startDiv">
              <p className="startP">
                <small>
                  The fallowing process is designed to help individuals relax.
                  Press the Start button to begin. For best results, try to stay
                  with the auditory queue. This process takes approximately 5:30
                  minutes.
                </small>
              </p>
              <button className="bilatStartBtn" onClick={this.start}>
                Start
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Bilateral;
