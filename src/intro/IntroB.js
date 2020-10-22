import React, { Component } from "react";
import firebase from "../FireConfig";
import floppy from "../imgs/floppy.png";

class IntroB extends Component {
  state = {
    great: false,
    target: "",
    reasons: [],
  };

  myFunction = () => {
    this.setState({ great: !this.state.great });
    const currentUser = firebase.auth().currentUser.uid.toString();
    firebase
      .firestore()
      .collection("usercycle")
      .doc(`${currentUser}_demo`)
      .set({ demo: this.state.reasons });
  };

  propFunction = () => {
    console.log("submitted new demo");
    const { toggleB } = this.props;
    this.props.toggleB();
    this.myFunction();
  };

  checked = (e) => {
    let reasons = this.state.reasons;
    let target = e.target.value;
    if (reasons.includes(target)) {
      reasons.pop(target);
    } else {
      reasons.push(target);
    }
    console.log(this.state.reasons, "+ i logged reasons.");
  };

  render() {
    return (
      <div className="introBContainer">
        {!this.state.great ? (
          <div>
            <p>
              Welcome to SelfTeck. We're glad your here and hope you find your own peace through SelfTeck. First, Do any of the fallowing describe why you're here?
            </p>
            <br />
            <form className="demographicOne" onSubmit={this.handleFormSubmit}>
              <div className="inputBContainer">
                <label class="checkbox">
                  <input
                    className="checkmark"
                    type="checkbox"
                    value="I want to feel better about myself"
                    name="one"
                    id="checkOne"
                    onChange={this.checked}
                  />
                  <span class="overlay">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                </label>
                <label htmlFor="checkbox">
                  I want to feel better about myself
                </label>

                <label class="checkbox">
                  <input
                    className="checkmark"
                    type="checkbox"
                    value="I want to change the way I think about others or myself"
                    name="two"
                    id="checkOne"
                    onChange={this.checked}
                  />
                  <span class="overlay">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                </label>
                <label htmlFor="two">
                  I want to change the way I think about others or myself
                </label>

                <label class="checkbox">
                  <input
                    className="checkmark"
                    type="checkbox"
                    value="I want my relationships to be more positive"
                    name="three"
                    id="checkOne"
                    onChange={this.checked}
                  />
                  <span class="overlay">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                </label>
                <label htmlFor="three">
                  I want my relationships to be more positive
                </label>

                <label class="checkbox">
                  <input
                    className="checkmark"
                    type="checkbox"
                    value="I want to understand why I act a certain way during certain times"
                    name="four"
                    id="checkOne"
                    onChange={this.checked}
                  />
                  <span class="overlay">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                </label>
                <label htmlFor="four">
                  I want to understand why I act a certain way during certain
                  times
                </label>

                <label class="checkbox">
                  <input
                    className="checkmark"
                    type="checkbox"
                    value="I want to understand why others act the way they do during certain times"
                    name="five"
                    id="checkOne"
                    onChange={this.checked}
                  />
                  <span class="overlay">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                </label>
                <label htmlFor="five">
                  I want to understand why others act the way they do during
                  certain times
                </label>

                <label class="checkbox">
                  <input
                    className="checkmark"
                    type="checkbox"
                    value="I want to deal with certain past events in a healthier way"
                    name="six"
                    id="checkOne"
                    onChange={this.checked}
                  />
                  <span class="overlay">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                </label>
                <label htmlFor="sixone">
                  I want to deal with certain past events in a healthier way
                </label>

                <label class="checkbox">
                  <input
                    className="checkmark"
                    type="checkbox"
                    value="Other"
                    name="seven"
                    id="checkOne"
                    onChange={this.checked}
                  />
                  <span class="overlay">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                </label>
                <label htmlFor="seven">Other</label>
              </div>

              <button
                type="submit"
                className="introBSubmit"
                onClick={this.myFunction}
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className="successDiv">
            <img src={floppy} alt="image of floppy disc" />
            <h3>Alright, Let's continue to get you set up. Next, we'll try to identify anything preventing you from moving to your peace.</h3>
            <button className="challengeCardView" onClick={this.propFunction}>
              Continue
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default IntroB;
