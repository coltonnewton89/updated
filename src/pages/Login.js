import React, { Component } from "react";
import Forgot from "../pages/Forgot";
import "../theme/Login.css";
import firebase from "../FireConfig";
import Signup from "../pages/Signup";
import selfteckImg from "../imgs/teck.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: "",
      password: "",
      create: false,
      forgot: false,
    };
  }

  create = () => {
    this.setState({ create: !this.state.create });
  };

  forgot = () => {
    this.setState({ forgot: !this.state.forgot });
    console.log(this.state.forgot);
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
    return (
      <div className="loginShell">
        {!this.state.create && !this.state.forgot ? (
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
                  className="inputLogin"
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
                  className="inputLogin"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <p onClick={this.forgot}>Forgot Password?</p>
              <button type="submit" className="loginBtn">
                Login
              </button>
            </form>
            <span className="loginSpan"></span>
            <div className="specDiv">
              <p>Not yet a user?</p>
              <a href="https://messenger-36c0b.web.app/" className="specP">Register Now!</a>
            </div>
            <a href="https://messenger-36c0b.web.app/" className="createUser">Create New User</a>
          </div>
        ) :  (
          <Forgot forgot={this.forgot} />
        ) }
      </div>
    );
  }
}

export default Login;

// else if (this.state.create) {
//   return <Signup goBack={this.create} />;
// } else if (this.state.forgot) {
//   return <ForgotPassword />;
// }
