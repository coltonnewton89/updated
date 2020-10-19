import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../theme/Notifications.css";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      alarmTime: "",
      alarmTimeTwo: "",
      alarmTimeThree: "",
      alarmTimeFour: "",
      alarmTimeFive: "",
      useNotifications: false,
      formName: false,
      exit: false
    };
    this.setAlarmTime = this.setAlarmTime.bind(this);
    this.setAlarmTimeTwo = this.setAlarmTimeTwo.bind(this);
    this.setAlarmTimeThree = this.setAlarmTimeThree.bind(this);
    this.setAlarmTimeFour = this.setAlarmTimeFour.bind(this);
    this.setAlarmTimeFive = this.setAlarmTimeFive.bind(this);
  }

  

  setAlarmTime(event) {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value;
    this.setState({
      alarmTime: inputAlarmTimeModified,
    });
  }
  setAlarmTimeTwo(event) {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value;
    this.setState({
      alarmTimeTwo: inputAlarmTimeModified,
    });
  }
  setAlarmTimeThree(event) {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value;
    this.setState({
      alarmTimeThree: inputAlarmTimeModified,
    });
  }
  setAlarmTimeFour(event) {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value;
    this.setState({
      alarmTimeFour: inputAlarmTimeModified,
    });
  }
  setAlarmTimeFive(event) {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value;
    this.setState({
      alarmTimeFive: inputAlarmTimeModified,
    });
  }

  toggleNotifications=()=>{
    var oldEntry = JSON.parse(localStorage.getItem("notificationTimes")) || [];
    this.setState({useNotifications: !this.state.useNotifications})
    console.log(oldEntry)
    this.setState({formName: !this.state.formName})
  }

  save=()=>{
    var oldEntry = JSON.parse(localStorage.getItem("notificationTimes")) || [];
    if(this.state.useNotifications == true){
      oldEntry = [];
      oldEntry.push(this.state.alarmTime, this.state.alarmTimeTwo, this.state.alarmTimeThree, this.state.alarmTimeFour, this.state.alarmTimeFive)
    }else{
      oldEntry= null
    }
    localStorage.setItem("notificationTimes", JSON.stringify(oldEntry));
    this.exit();
  }

  exit=()=>{
    this.setState({exit: true})
  }

  

  render() {
    return (
      <div className="notificationShell">
        {
          !this.state.exit ? <div className="notificationContainer">
          <p>
            Remembering to do our four steps can prove difficult. Below, you can choose to use notifications. If you do, please
            choose five times throughout your day for a simple reminder tone to
            alert you to cycle through your four steps.
          </p>        
            <div className="notificationToggle">
              Use Notifications: 
              <label class="switch">
            <input type="checkbox" onChange={this.toggleNotifications}/>
            <span class="slider round"></span>
          </label>
            </div>       
                  <div className={this.state.formName ? 'flipIn': 'flipOut'}>
                  <form  className="timeContainer" onSubmit={this.save}>
                    <p>Select times</p>
                    <input
                      type="time"
                      value={this.state.alarmTime}
                      className="timerInput"
                      onChange={this.setAlarmTime}
                      required={this.state.useNotifications}
                    ></input>
                 
                    <input
                      type="time"
                      className="timerInput"
                      onChange={this.setAlarmTimeTwo}
                      required={this.state.useNotifications}
                    ></input>
                  
                  
                    <input
                      type="time"
                      className="timerInput"
                      onChange={this.setAlarmTimeThree}
                      required={this.state.useNotifications}
                    ></input>
                    
                 
                  
                    <input
                      type="time"
                      className="timerInput"
                      onChange={this.setAlarmTimeFour}
                      required={this.state.useNotifications}
                    ></input>
                  
                    <input
                      type="time"
                      className="timerInput"
                      onChange={this.setAlarmTimeFive}
                      required={this.state.useNotifications}
                    ></input>
                    <button className="timeSaveBtn" type="submit">Save</button>
                  </form>
                  </div>
                  {!this.state.formName ? <button className='flipInTwo' onClick={this.save}>Save</button> : null}
           
        </div> : <div className="notificationContainer">
          <h2>Your Notification Settings have been saved.</h2>
          <p>Note: Your old notification schedule may still be in affect but will update within 24 hours.</p>
          <NavLink
          exact
          to="/Cycle"
          className="deleteCancelBtn"
          activeStyle={{ color: "#e56b6f" }}
        >
          Exit
        </NavLink>
        </div>
        }
      </div>
    );
  }
}

export default Timer;
