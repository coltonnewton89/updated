import React, { Component } from "react";
import Login from "./pages/Login";
import firebase from "./FireConfig";
import ButtonApp from "./components/ButtonApp";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { IonApp, IonContent } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <IonApp>
        <IonContent>
          {this.state.user ? (
            <BrowserRouter>
              <ButtonApp />
              <Router
                style={{
                  alignText: "center",
                }}
              />
            </BrowserRouter>
          ) : (
            <Login />
          )}
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
