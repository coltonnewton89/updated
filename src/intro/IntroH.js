import React, { Component } from "react";
import firebase from "../FireConfig";
import bulbAndOthers from "../imgs/bulbAndOthers.png";
import truthReflection from "../imgs/truthReflection.png";
import swipeLeft from "../imgs/swipeLeft.png";
import facebookIcon from "../menuImgs/facebookIcon.png";
import youtubeIcon from "../menuImgs/youtubeIcon.png";

class IntroH extends Component {
  constructor(props) {
    super(props);
    this.state = {
      truthArr: [],
      _truthArr: "",
      responseArr: "",
      priArr: "",
      viewTruth: false,
      see: false,
      finalTip: false
    };
    this.pushCustomChoice = this.pushCustomChoice.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ _truthArr: e.target.value });
  }

  pushCustomChoice(e) {
    e.preventDefault();
    if (this.state.truthArr.length <= 1) {
      this.setState({
        truthArr: this.state.truthArr.concat(this.state._truthArr + ", "),
      });
    }
    if (this.state.truthArr.length === 2) {
      this.setState({
        truthArr: this.state.truthArr.concat("and " + this.state._truthArr),
      });
    }
    document.getElementById("custom").value = "";

    console.log(this.state.truthArr);
  }

  componentDidUpdate() {
    const currentUser = firebase.auth().currentUser.uid.toString();
    if (this.state.truthArr.length === 3) {
      firebase
        .firestore()
        .collection("usercycle")
        .doc(`${currentUser}_truthArr`)
        .set({
          truthArr: this.state.truthArr,
        });
    }
  }

  toggleSee = () => {
    this.setState({ see: true });
  };

  toggleH = () => {
    const { toggleH } = this.props;
    this.props.toggleH();
  };

  pushChoice = (e) => {
    var needle = this.state.truthArr.indexOf(e.target.value + ", ")
  if(needle > -1){
    this.state.truthArr.splice(needle, 1)
    e.target.style= null
  } else {
    if (this.state.truthArr.length <= 1) {
      this.setState({
        truthArr: this.state.truthArr.concat(e.target.value + ", "),
      });
    }
    if (this.state.truthArr.length === 2) {
      this.setState({
        truthArr: this.state.truthArr.concat("and " + e.target.value),
      });
    }
    console.log(this.state.truthArr);
    e.target.style.backgroundColor = "rgb(33, 221, 224)";
    e.target.style.border = "1px solid #f1faee";
    e.target.style.scale = "1.3";
  };
  };

  toggleFinal=()=>{
    this.setState({see: false})
    this.setState({finalTip: true})
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const currentUser = firebase.auth().currentUser.uid.toString();
        var priArrRef = firebase
          .firestore()
          .collection("usercycle")
          .doc(`${currentUser}_priArr`);
        priArrRef.get().then((doc) => {
          if (doc.exists) {
            this.setState({ priArr: doc.data().priArr });
          }
        });
        var responseArrRef = firebase
          .firestore()
          .collection("usercycle")
          .doc(`${currentUser}_responseArr`);
        responseArrRef.get().then((doc) => {
          if (doc.exists) {
            this.setState({ responseArr: doc.data().responseArr });
          }
        });
        console.log("i pulled response");
      }
    });
  }

  clearAll = () => {
    this.setState({ truthArr: [] });
  };

  render() {
    return (
      <div className="introHContainer">
        {this.state.see ? (
          <div className='justLike' style={{ textAlign: "center" }}>
            <h3>Just like the pain cycle, you can change your peace cycle any time.</h3>
            <img
              className="swipeLeft"
              src={swipeLeft}
              alt="image of finger swiping left"
            />{" "}
            <br />
            <button className="introPCSubmit" onClick={this.toggleFinal}>
              Continue
            </button>
          </div>
        ) : this.state.finalTip ? (<div className='finalTips'>
          <h2>Final tips:</h2>
          <ul className='finalTip'>
            <li className='finalLi'>Events happen through out our lives that can alter how we self-regulate.</li>
            <li className='finalLi'>We can choose to act or respond with our pain, but very seldom will this benefit us or the people around us.</li>
            <li className='finalLi'>Instead of responding out of pain, try to let peace be your compass. This can greatly improve present circumstances.</li>
            <li className='finalLi'>Cycling through your four steps when something negative arises can help. Remember to really believe your truth, not lies.</li>
            <li className='finalLi'>Some last words: Peace can be habbit and SelfTeck is designed to help develop that habbit. For best results,
              try to cycle through your four steps five times a day or when needed. You can set reminders to cycle through your four steps after
              you cycle through your four steps the first time.
            </li>
          </ul>
          <p>
              For more content and helpful advice to better utilize this app, you can click on the appropriate icon below to visit us on facebook or youtube.
            </p>
            <div className="socialMediaContainer">
              <a href="https://www.facebook.com/infoselfteck">
                <img
                  className="mediaIcon"
                  src={facebookIcon}
                  alt="Facebook Icon"
                />
              </a>

              <a href="https://www.youtube.com/channel/UCAqFMa7oOn-7I1cTAt8q58g?view_as=subscriber">
                <img
                  className="mediaIcon"
                  src={youtubeIcon}
                  alt="Youtube Icon"
                />
              </a>
            </div>
          <button className="introPCSubmit" onClick={this.toggleH}>
              Finish
            </button>
        </div>) : (
          <div>
            {this.state.truthArr.length === 3 ? (
              <div className='embrace' style={{ textAlign: "center" }}>
                <h3>Excellent. From here on, try to embrace your peace cycle:</h3>
                <br />
                <h4>You are {this.state.truthArr}</h4>
                <img
                  src={truthReflection}
                  alt="green bulb standing in front of mirror"
                />

                <br />
                <h4>which allows you to become {this.state.responseArr}. Again, if you choose so.</h4>
                <br />
                <button className="introPCSubmit" onClick={this.toggleSee}>
                  Continue
                </button>
              </div>
            ) : (
              <div className='theseWords' style={{ textAlign: "center" }}>
                <h4>
                  Next step. Remember these words?
                  <br /> <h3>{this.state.priArr}</h3>
                  <img
                    className="bulbAndOthers"
                    src={bulbAndOthers}
                    alt="light bulb conversing with other light bulbs"
                  />
                  <br />
                  Imagine that the people who knew you best could comment on 
                  these words. What would they say your truth was?
                  You are _____.
                </h4>

                <div id="btnBackdrop">
                  <div className="button-container">
                    <button
                      className="wordbank"
                      value="Loved"
                      onClick={this.pushChoice}
                    >
                      Loved
                    </button>
                    <button
                      className="wordbank"
                      value="Worthy"
                      onClick={this.pushChoice}
                    >
                      Worthy
                    </button>
                    <button
                      className="wordbank"
                      value="Significant"
                      onClick={this.pushChoice}
                    >
                      Significant
                    </button>
                    <button
                      className="wordbank"
                      value="Accompanied/Not Alone"
                      onClick={this.pushChoice}
                    >
                      Accompanied/Not Alone
                    </button>
                    <button
                      className="wordbank"
                      value="Valuable"
                      onClick={this.pushChoice}
                    >
                      Valuable
                    </button>
                    <button
                      className="wordbank"
                      value="Wanted"
                      onClick={this.pushChoice}
                    >
                      Wanted
                    </button>
                    <button
                      className="wordbank"
                      value="Hopeful"
                      onClick={this.pushChoice}
                    >
                      Hopeful
                    </button>
                    <button
                      className="wordbank"
                      value="Respected"
                      onClick={this.pushChoice}
                    >
                      Respected
                    </button>
                    <button
                      className="wordbank"
                      value="Liberalized"
                      onClick={this.pushChoice}
                    >
                      Liberalized
                    </button>
                    <button
                      className="wordbank"
                      value="Safe"
                      onClick={this.pushChoice}
                    >
                      Safe
                    </button>
                    <button
                      className="wordbank"
                      value="Secure"
                      onClick={this.pushChoice}
                    >
                      Secure
                    </button>
                    <button
                      className="wordbank"
                      value="Capable"
                      onClick={this.pushChoice}
                    >
                      Capable
                    </button>
                    <button
                      className="wordbank"
                      value="Empowered"
                      onClick={this.pushChoice}
                    >
                      Empowered
                    </button>
                    <button
                      className="wordbank"
                      value="In Control"
                      onClick={this.pushChoice}
                    >
                      In Control
                    </button>
                    <button
                      className="wordbank"
                      value="Free"
                      onClick={this.pushChoice}
                    >
                      Free
                    </button>
                    <button
                      className="wordbank"
                      value="Protected"
                      onClick={this.pushChoice}
                    >
                      Protected
                    </button>
                    <button
                      className="wordbank"
                      value="Connected"
                      onClick={this.pushChoice}
                    >
                      Connected
                    </button>
                    <button
                      className="wordbank"
                      value="Known"
                      onClick={this.pushChoice}
                    >
                      Known
                    </button>
                    <button
                      className="wordbank"
                      value="Strong"
                      onClick={this.pushChoice}
                    >
                      Strong
                    </button>
                    <form onSubmit={this.pushCustomChoice}>
                      <input
                        className="inputLogin"
                        type="text"
                        id="custom"
                        placeholder="Type Custom Truth Here"
                        value={this.state.value}
                        onChange={this.handleChange}
                      />{" "}
                      <br />
                      <button type="submit" className="wordbank">
                        Add Truth
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default IntroH;
