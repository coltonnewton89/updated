import React, { Component } from "react";
import "../theme/Login.css";
import firebase from "../FireConfig";
import Signup from "../pages/Signup";
import selfteckImg from "../imgs/teck.gif";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: "",
      password: "",
      create: false,
    };
  }

  create = () => {
    this.setState({ create: true });
  };

  login(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((err) => {
        alert(err);
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    if (!this.state.create) {
      return (
        <div className="loginContainer">
          <img
            src={selfteckImg}
            className="selfteckImg"
            alt="Self teck title"
          />
          <form className="loginForm" onSubmit={this.login}>
            <div className="loginInput">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="loginInput">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <p>Forgot Username or Password?</p>
            <button type="submit" className="loginBtn">
              Login
            </button>
          </form>
          <span className='loginSpan'></span>
          <div className="specDiv">
            <p>Not yet a user?</p>
            <p className="specP" onClick={this.create}>
              Register Now!
            </p>
          </div>
          <button className="createUser" onClick={this.create}>
            Create New User
          </button>
        </div>
      );
    } else {
      return <Signup />;
    }
  }
}

export default Login;
