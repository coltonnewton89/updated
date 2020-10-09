import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import alertAudio from "../audio/alertAudio.wav";
import "../theme/Notifications.css";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: "",
      alarmTime: "",
      alarmTimeTwo: "",
      alarmTimeThree: "",
      alarmTimeFour: "",
      alarmTimeFive: "",
      useNotifications: false,
      notificationName: "",
      notificationCrumb: false,
    };
    this.setAlarmTime = this.setAlarmTime.bind(this);
    this.setAlarmTimeTwo = this.setAlarmTimeTwo.bind(this);
    this.setAlarmTimeThree = this.setAlarmTimeThree.bind(this);
    this.setAlarmTimeFour = this.setAlarmTimeFour.bind(this);
    this.setAlarmTimeFive = this.setAlarmTimeFive.bind(this);
  }

  componentDidMount() {
    this.clock = setInterval(() => this.setCurrentTime(), 1000);
    this.interval = setInterval(() => this.checkAlarmClock(), 1000);
    let crumb = localStorage.getItem("notificationCrumb");
    this.setState({ notificationCrumb: crumb });
  }

  // componentDidUpdate = () => {
  //   this.componentDidMount();
  // };

  componentWillUnmount() {
    clearInterval(this.clock);
    clearInterval(this.interval);
  }

  setCurrentTime() {
    this.setState({
      currentTime: new Date().toLocaleTimeString("en-US", { hour12: false }),
    });
  }

  setAlarmTime(event) {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value + ":00";
    this.setState({
      alarmTime: inputAlarmTimeModified,
    });
  }
  setAlarmTimeTwo(event) {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value + ":00";
    this.setState({
      alarmTimeTwo: inputAlarmTimeModified,
    });
  }
  setAlarmTimeThree(event) {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value + ":00";
    this.setState({
      alarmTimeThree: inputAlarmTimeModified,
    });
  }
  setAlarmTimeFour(event) {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value + ":00";
    this.setState({
      alarmTimeFour: inputAlarmTimeModified,
    });
  }
  setAlarmTimeFive(event) {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value + ":00";
    this.setState({
      alarmTimeFive: inputAlarmTimeModified,
    });
  }

  checkAlarmClock() {
    const timeArray = [
      this.state.alarmTime,
      this.state.alarmTimeTwo,
      this.state.alarmTimeThree,
      this.state.alarmTimeFour,
      this.state.alarmTimeFive,
    ];
    for (let i = 0; i < timeArray.length; i++)
      if (this.state.currentTime === timeArray[i]) {
        var audio = new Audio(alertAudio);
        audio.play();
      }
  }

  sampleSound = () => {
    var audio = new Audio(alertAudio);
    audio.play();
  };

  toggleNotifications = () => {
    let crumb = localStorage.getItem("notificationCrumb");
    this.setState({ useNotifications: !this.state.useNotifications });
    if (this.state.useNotifications == true) {
      this.setState({ notificationName: "flipIn" });
      console.log(this.state.notificationName);
    } else {
      this.setState({ notificationName: "flipOut" });
      console.log(this.state.notificationName);
    }
    if (this.state.notificationName == "flipIn") {
      localStorage.setItem("notificationCrumb", true);
      console.log("set to true");
    } else if (this.state.notificationName == "flipOut") {
      localStorage.setItem("notificationCrumb", false);
      console.log("set to false");
    }
  };

  checkOrNot = () => {
    if (this.state.notificationCrumb == true) {
      return (
        <label class="switch">
          <input type="checkbox" checked onChange={this.toggleNotifications} />
          <span class="slider round"></span>
        </label>
      );
    } else {
      return (
        <label class="switch">
          <input type="checkbox" onChange={this.toggleNotifications} />
          <span class="slider round"></span>
        </label>
      );
    }
  };

  render() {
    return (
      <div className="notificationContainer">
        <p>
          Remembering to do our four steps can prove difficult. Below, please
          choose five times throughout your day for a simple reminder tone to
          alert you to cycle through your four steps.
        </p>
        <ul>
          <li>
            What will the alert sound like?{" "}
            <p className="sampleSound" onClick={this.sampleSound}>
              Click here
            </p>
          </li>
          <div className="notificationToggle">
            <p>Use Notifications: {this.checkOrNot()}</p>
          </div>
        </ul>
        <div className={this.state.notificationName}>
          <div className="timeShell">
            {this.state.notificationCrumb == null ||
            this.state.notificationcrumb == false ? null : (
              <div className="timeContainer">
                <form id="tOne">
                  <p>Select times</p>
                  <input
                    type="time"
                    className="timerInput"
                    onChange={this.setAlarmTime}
                  ></input>
                </form>
                <form id="tTwo">
                  <input
                    type="time"
                    className="timerInput"
                    onChange={this.setAlarmTimeTwo}
                  ></input>
                </form>
                <form id="tThree">
                  <input
                    type="time"
                    className="timerInput"
                    onChange={this.setAlarmTimeThree}
                  ></input>
                </form>
                <form id="tFour">
                  <input
                    type="time"
                    className="timerInput"
                    onChange={this.setAlarmTimeFour}
                  ></input>
                </form>
                <form id="tFive">
                  <input
                    type="time"
                    className="timerInput"
                    onChange={this.setAlarmTimeFive}
                  ></input>
                </form>
              </div>
            )}
          </div>
        </div>

        <NavLink
          exact
          to="/Cycle"
          className="deleteCancelBtn"
          activeStyle={{ color: "#e56b6f" }}
        >
          Save
        </NavLink>
      </div>
    );
  }
}

export default Timer;
