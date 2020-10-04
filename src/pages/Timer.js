import React, { Component } from "react";
import alertAudio from "./alertAudio.wav";

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
  }

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

  render() {
    return (
      <div>
        <p></p>
        <form id="tOne">
          <input type="time" onChange={this.setAlarmTime}></input>
        </form>
        <form id="tTwo">
          <input type="time" onChange={this.setAlarmTimeTwo}></input>
        </form>
        <form id="tThree">
          <input type="time" onChange={this.setAlarmTimeThree}></input>
        </form>
        <form id="tFour">
          <input type="time" onChange={this.setAlarmTimeFour}></input>
        </form>
        <form id="tFive">
          <input type="time" onChange={this.setAlarmTimeFive}></input>
        </form>
      </div>
    );
  }
}

export default Timer;
