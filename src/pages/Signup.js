import React, { Component } from "react";
import firebase from "../FireConfig";
import "../theme/Signup.css";
import createTitle from "../imgs/createTitle.png";

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

  goBack = () => {
    const { goBack } = this.props;
    this.props.goBack();
  };

  render() {
    return (
      <div className="signUpShell">
        {
          this.state.privacy ? <div className='termsDiv'>
            <p className='termsP'>Terms and conditions are currently under review. For now, 
              we will not take any responsibility and/or liability for the use of this application 
              and want to inform it's current testers and/or users they are using this product on their own accord. 
              We are working hard on making sure SelfTeck's terms and conditions are as informative 
              as possible to it's users. We are also in the midst of alpha and beta testing 
              and have many variables subject to change. We will have a completed terms and 
              conditions by the time we transition from testing to completed product.
            </p>
            <button className="createUser" onClick={this.terms}>
            Continue
          </button>
          </div> : <div className="signUpContainer">
        <img
          src={createTitle}
          className="selfteckImg"
          alt="create user title"
        />
        <form className="signUpForm" onSubmit={this.clicked}>
          <div className="signUpInput">
            <label htmlFor="email">Email:</label>
            <input
              className="inputLogin"
              placeholder="Email"
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
              className="inputLogin"
              placeholder="Create Password"
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
              className="inputLogin"
              placeholder="Confirm Password"
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
              className="inputSignUp"
              type="checkbox"
              className="checkbox"
              name="terms"
              onChange={this.checked}
            />
            <div className="checkLabel">
              I have read and agree to the SelfTeck
              <p className="specP" style={{ marginTop: "-1px" }} onClick={this.terms}>
                "Terms and Conditions"
              </p>
            </div>
          </div>
          <button type="submit" className="signUpBtn">
            Create New User
          </button>
          <button className="createUser" onClick={this.goBack}>
            Go Back
          </button>
        </form>
      </div>
        }
      </div>
      
    );
  }
}

export default Signup;
