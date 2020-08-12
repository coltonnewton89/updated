import React, { Component } from "react";
import firebase from "../FireConfig";
import "../theme/Signup.css";
import createTitle from '../imgs/createTitle.png'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
      confirm: "",
      err: null,
      checked: false,
      privacy: false,
    };
  }

  clicked = () => {
    if (this.state.password === this.state.confirm && this.state.checked) {
      this.signup();
    } else if (
      this.state.password === this.state.confirm &&
      !this.state.checked
    ) {
      alert("Please check that you have read Terms and Conditions");
    } else if (
      this.state.password !== this.state.confirm &&
      this.state.checked
    ) {
      alert(
        "Your password did not agree with your confirm password. Please try again!"
      );
    }
  };

  terms = () => {
    this.setState({ privacy: !this.state.privacy });
  };

  checked = () => {
    this.setState({ checked: true });
    console.log(this.state.email, this.state.password, this.state.confirm);
  };

  signup(e) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((authRes) => {
        const userObj = {
          email: authRes.user.email,
        };
        firebase
          .firestore()
          .collection("users")
          .doc(this.state.email)
          .set(userObj);
      })
      .catch((err) => {
        this.setState({ err: err });
      });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="signUpContainer">
        <img src={createTitle} className='createTitle' alt="create user title"/>
        <form className="signUpForm" onSubmit={this.clicked}>
          <div className="signUpInput">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              required
            />
          </div>
          <div className="signUpInput">
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              type="password"
              onChange={this.handleChange}
              id="password"
              value={this.state.password}
              required
            />
          </div>
          <div className="signUpInput">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              name="confirm"
              type="password"
              onChange={this.handleChange}
              id="confirm"
              value={this.state.cornfirm}
              required
            />
          </div>
          <p>{this.state.err}</p>
          <div className="specDiv">
            <p className="specP" onClick={this.terms}>
              Terms and Conditions
            </p>
          </div>
          <div className="specDiv">
            <input
              type="checkbox"
              className="checkbox"
              name="terms"
              onChange={this.checked}
            />
            <div className="checkLabel">
              I have read and agree to the SelfTeck
              <p className="specP" style={{ marginTop: "-1px" }}>
                "Terms and Conditions"
              </p>
            </div>
          </div>
          <button type="submit" className="signUpBtn">
            Create New User
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
