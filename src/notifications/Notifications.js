import React, { Component } from 'react';
import { Plugins } from '@capacitor/core';
import {quotes} from '../db/Quotes'
const { LocalNotifications } = Plugins;


class notes extends Component {
  state = {  }
  componentDidMount=()=>{
    var randomNumber = Math.floor(Math.random() *(quotes.length));
    var randomNumberTwo = Math.floor(Math.random() *(quotes.length));
    var randomNumberThree = Math.floor(Math.random() *(quotes.length));
    var randomNumberFour = Math.floor(Math.random() *(quotes.length));
    var randomNumberFive = Math.floor(Math.random() *(quotes.length));
    const quoteArr = [quotes[randomNumber],quotes[randomNumberTwo],quotes[randomNumberThree],quotes[randomNumberFour],quotes[randomNumberFive]]
    var times = localStorage.getItem('notificationTimes'); 
    
    // Time One
    const myTimeOne = () => {
    var timeArr = [(times[2]),(times[3]),(times[5]),(times[6])]
    var hourArr = [(timeArr[0]),(timeArr[1])]
    var minuteArr = [timeArr[2], timeArr[3]]    
    var a = hourArr.join('')
    var b = minuteArr.join('')
    var hour = parseInt(a)
    var minute = parseInt(b)
    var snapDate = new Date();
    snapDate.setHours(hour);
    snapDate.setMinutes(minute)
    snapDate.setSeconds(0)
    if(snapDate < new Date()){
      snapDate.setDate(snapDate.getDate() + 1)
    }
    return snapDate
    }

    // Time Two
    const myTimeTwo = () => {
      var timeArr = [(times[10]),(times[11]),(times[13]),(times[14])]
      var hourArr = [(timeArr[0]),(timeArr[1])]
      var minuteArr = [timeArr[2], timeArr[3]]    
      var a = hourArr.join('')
      var b = minuteArr.join('')
      var hour = parseInt(a)
      var minute = parseInt(b)
      var snapDate = new Date();
      snapDate.setHours(hour);
      snapDate.setMinutes(minute)
      snapDate.setSeconds(0)
      if(snapDate < new Date()){
        snapDate.setDate(snapDate.getDate() + 1)
      }
      return snapDate
      }

    // Time Three
    const myTimeThree = () => {      
      var timeArr = [(times[18]),(times[19]),(times[21]),(times[22])]
      var hourArr = [(timeArr[0]),(timeArr[1])]
      var minuteArr = [timeArr[2], timeArr[3]]    
      var a = hourArr.join('')
      var b = minuteArr.join('')
      var hour = parseInt(a)
      var minute = parseInt(b)
      var snapDate = new Date();
      snapDate.setHours(hour);
      snapDate.setMinutes(minute)
      snapDate.setSeconds(0)
      if(snapDate < new Date()){
        snapDate.setDate(snapDate.getDate() + 1)
      }
      return snapDate
      }

    // Time Four
    const myTimeFour = () => {      
      var timeArr = [(times[26]),(times[27]),(times[29]),(times[30])]
      var hourArr = [(timeArr[0]),(timeArr[1])]
      var minuteArr = [timeArr[2], timeArr[3]]    
      var a = hourArr.join('')
      var b = minuteArr.join('')
      var hour = parseInt(a)
      var minute = parseInt(b)
      var snapDate = new Date();
      snapDate.setHours(hour);
      snapDate.setMinutes(minute)
      snapDate.setSeconds(0)
      if(snapDate < new Date()){
        snapDate.setDate(snapDate.getDate() + 1)
      }
      return snapDate
      }

    //Time Five
    const myTimeFive = () => {      
      var timeArr = [(times[34]),(times[35]),(times[37]),(times[38])]
      var hourArr = [(timeArr[0]),(timeArr[1])]
      var minuteArr = [timeArr[2], timeArr[3]]    
      var a = hourArr.join('')
      var b = minuteArr.join('')
      var hour = parseInt(a)
      var minute = parseInt(b)
      var snapDate = new Date();
      snapDate.setHours(hour);
      snapDate.setMinutes(minute)
      snapDate.setSeconds(0)
      if(snapDate < new Date()){
        snapDate.setDate(snapDate.getDate() + 1)
      }
      return snapDate
      }

    
    

    //Alternative function
    const logger = ()=>{
    console.log('I have canceled schedule')}

    if( times !== null){
      const notifs = times.toString() == 'null' ? logger() : LocalNotifications.schedule({
        notifications: [
          {
            title: "Four Steps Reminder",
            body: quoteArr[0],
            id: 1,
            schedule: { at:  myTimeOne()},
            sound: null,
            attachments: null,
            actionTypeId: "",
            extra: null
          },
          {
            title: "Four Steps Reminder",
            body: quoteArr[1],
            id: 2,
            schedule: { at:  myTimeTwo()},
            sound: null,
            attachments: null,
            actionTypeId: "",
            extra: null
          },
          {
            title: "Four Steps Reminder",
            body: quoteArr[2],
            id: 3,
            schedule: { at:  myTimeThree()},
            sound: null,
            attachments: null,
            actionTypeId: "",
            extra: null
          },
          {
            title: "Four Steps Reminder",
            body: quoteArr[3],
            id: 4,
            schedule: { at:  myTimeFour()},
            sound: null,
            attachments: null,
            actionTypeId: "",
            extra: null
          },
          {
            title: "Four Steps Reminder",
            body: quoteArr[4],
            id: 5,
            schedule: { at:  myTimeFive()},
            sound: null,
            attachments: null,
            actionTypeId: "",
            extra: null
          },
        ]
      });
      console.log('scheduled notifications', notifs);
    }else{
      console.log('your time is null')
    }
  }
  render() { 
    return ( null );
  }
}
 
export default notes;


