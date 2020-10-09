import React, { Component } from "react";
import "../theme/Forgot.css";
import firebase from "../FireConfig";

class Forgot extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: "",
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  sendEmail = () => {
    var auth = firebase.auth();
    var emailAddress = auth.currentUser.email.toString();
    auth
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
        alert("We've sent a Reset Password email to " + emailAddress);
        const { forgot } = this.props;
        this.props.forgot();
      })
      .catch(function (error) {
        alert(error);
        const { forgot } = this.props;
        this.props.forgot();
      });
  };

  cancel = () => {
    const { forgot } = this.props;
    this.props.forgot();
  };

  render() {
    return (
      <div className="forgotContainer">
        <h2>Forgot your password? No problem!</h2>
        <ul>
          <li className="forgotLi">
            Just type your email address in the "email" section provided below.
          </li>
          <li className="forgotLi">
            Click the "Reset Password" button below. We'll then send a reset
            password email to that email address.
          </li>
          <li className="forgotLi">
            Fallow the instructions in the reset password email. You can then
            login with your new credentials.
          </li>
        </ul>

        <form onSubmit={this.sendEmail} className="loginInput">
          <label htmlFor="email">Email:</label>
          <input
            className="inputLogin"
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <button type="submit" className="submitReset">
            Reset Password
          </button>
        </form>

        <button className="cancelBtn" onClick={this.cancel}>
          Cancel
        </button>
      </div>
    );
  }
}

export default Forgot;
