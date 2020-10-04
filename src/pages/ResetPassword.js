import React, { Component } from "react";
import "../theme/ResetPassword.css";
import { NavLink } from "react-router-dom";
import firebase from "../FireConfig";

class ResetPassword extends Component {
  state = {};

  sendEmail = () => {
    var auth = firebase.auth();
    var emailAddress = auth.currentUser.email.toString();
    auth
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
        auth.signOut();
        alert("We've sent a Reset Password email to " + emailAddress);
      })
      .catch(function (error) {
        alert(error);
      });
  };

  render() {
    return (
      <div className="resetContainer">
        <h2 className="resetHeader">
          To reset your password, click the button below, we'll then send you an
          email to the address attached to this account. Fallow the emailed
          instructions to complete resetting your password.
        </h2>
        <NavLink
          onClick={this.sendEmail}
          exact
          to="/Cycle"
          className="resetSendBtn"
          activeStyle={{ color: "#e56b6f" }}
        >
          Send Reset Email
        </NavLink>

        <NavLink
          exact
          to="/Cycle"
          className="resetCancelBtn"
          activeStyle={{ color: "#e56b6f" }}
        >
          Cancel
        </NavLink>
      </div>
    );
  }
}

export default ResetPassword;
