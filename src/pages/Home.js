import { IonPage } from '@ionic/react';
import MasterIntro from './MasterIntro'
import React, { Component }  from 'react';
import './Home.css';
import { BrowserRouter } from "react-router-dom";
import Router from "../Router";
import Notes from '../notifications/Notifications'

class Home extends Component {
  state = { 
    crumb: null
 }

 toggleMasterIntro=()=>{
    localStorage.setItem("cupcake", "crumb");
    this.componentDidMount();
  };

  componentDidMount() {
    console.log('Yeet!')
    localStorage.getItem("cupcake") &&
      this.setState({ crumb: localStorage.getItem("cupcake") });
  }

  render() {
    if (this.state.crumb == "crumb") {
      return (
        <IonPage className='homeMain'>
          <Notes/>
          <BrowserRouter>
              <Router/>
            </BrowserRouter>
        </IonPage>
      );
    } else {
      return (
        <IonPage  className='homeMain'>
          <MasterIntro toggleMasterIntro={this.toggleMasterIntro}/>
        </IonPage>
        )
    }
  }
}
 
export default Home;