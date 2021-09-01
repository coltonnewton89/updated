import React, { Component } from 'react';
import '../theme/appMain.css'
import '../theme/introH.css'
import truthBtns from './truthBtns'
import scrollUp from '../imgs/scrollUp.gif'
import facebookIcon from '../imgs/facebookIcon.png'
import youtubeIcon from '../imgs/youtubeIcon.png'
import bulbAndOthers from '../imgs/bulbAndOthers.png'
import truthReflection from '../imgs/truthReflection.png'
import swiper from '../imgs/swiperNoSwiping.png'

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
      me: false,
      finalTip: false,
      displayBtns: false
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
    if (this.state.truthArr.length == 3) {     
      localStorage.setItem("truth", this.state.truthArr)
    } 
  }

  toggleSee = () => {
    this.setState({me: true})
    setTimeout(() => {
      this.setState({ see: true });
    }, 700);
  };

  toggleHome = () => {
    localStorage.setItem("truth", this.state.truthArr.toString())
    const { toggleHome } = this.props;
    this.props.toggleHome();
  };

  pushChoice = (e) => {
    var needle = this.state.truthArr.indexOf(e.target.value + ", ")
    if(needle > -1){
      this.state.truthArr.splice(needle, 1)
      e.target.style= null
      this.setState({truthArr: this.state.truthArr})
    }else{
      if (this.state.truthArr.length <= 1) {
        this.setState({
          truthArr: this.state.truthArr.concat(e.target.value + ", "),
        });
      }
      if (this.state.truthArr.length == 2) {
        this.setState({
          truthArr: this.state.truthArr.concat("and " + e.target.value),
        });       
        localStorage.setItem("truth", this.state.truthArr)
      }
      
      console.log(this.state.truthArr);
      e.target.style.backgroundColor = "rgb(11, 167, 159)";
      e.target.style.border = "1px solid #f1faee";
      e.target.style.scale = "1.3";
    };
    };

  toggleFinal=()=>{
    this.setState({see: false})
    this.setState({finalTip: true})
  }

  componentDidMount() {
    this.setState({priArr: localStorage.getItem("pain")});
    this.setState({responseArr: localStorage.getItem("response")});
  }

  displayBtns= () => {
    this.setState({displayBtns: !this.state.displayBtns})
  }

  render() {
    return (
      <div className="introHContainer">
        {/* Step E */}
        {this.state.see ? (
          <div className="introHdiv">
            <div className='justLikeIn' style={{ textAlign: "center" }}>
            <img src={swiper} alt="index finger swiping left to new screen" className='swipe'/>
            <p>Need to edit your pain or peace cycle? When viewing your four steps you can 
              simply swipe right to edit your pain cycle or swipe left to edit your peace cycle.</p>            
            <br />
            <button className="introBtnThree" onClick={this.toggleFinal}>
              Continue
            </button>
          </div>
          </div>
        ) : this.state.finalTip ? (
        <div className="introHdiv">
          <div className='finalTips'>
          {/* Step F */}
          <p>Final tips:</p>
          <ul className='finalTip'>
            <li className='finalLi'>Events happen through out our lives that can alter how we self-regulate.</li>
            <li className='finalLi'>We can choose to act or respond with our pain, but very seldom will this benefit us or the people around us.</li>
            <li className='finalLi'>Instead of responding out of pain, try to let peace be your compass. This can greatly improve present circumstances.</li>
            <li className='finalLi'>Cycling through your four steps when something negative arises can help. Remember to really believe your truth, not lies.</li>
            <li className='finalLi'>Some last words: Peace can be habbit and SelfTeck is designed to help develop that habit. For best results,
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
              <button className="introBtnFinal" onClick={this.toggleHome}>
                  Finish
                </button>
            </div>

            <div className='justLikeOut' style={{ textAlign: "center" }}>
            <img src={swiper} alt="index finger swiping left to new screen" className='swipe'/>
            <p>Need to edit your pain or peace cycle? When viewing your four steps you can 
              simply swipe right to edit your pain cycle or swipe left to edit your peace cycle.</p>            
            <br />
            <button className="introBtnThree" onClick={this.toggleFinal}>
              Continue
            </button>
            </div>    
         </div>    
        ) : (
          // This is step C
          <div>
            {this.state.truthArr.length == 3 ? (
              <div className='introHdiv'>
                <div className='btnContainerOut'>                    
                  {truthBtns.map((truthBtn)=>{
                          return(
                              <button className='truthBtn' value={truthBtn} onClick={this.pushChoice}>{truthBtn}</button>
                          )
                      })}      
                      <br />
                      <input
                              onChange={this.handleChange}
                              id='custom'
                              type="text"
                              placeholder="Add Custom Truth Here"
                              required
                              className="customCopeInput"
                            />
                      <br />
                      <button className='customCopeBtn' onClick={this.pushCustomChoice}>
                              Add A Custom Truth
                      </button>
                      <br />
                      {this.state.truthArr}
                  </div>
                <div className="introHdiv">
                  {/* Step D */}
                <img src={truthReflection} alt="Green lightbulb self reflecting in mirror" className='truthReflection'/>
                {
                  !this.state.me ? (
                    <div className="embraceIn">
                      <p>Excellent. From here on, try to embrace your peace cycle:</p>
                      <br />
                      <p>You are {this.state.truthArr}</p>
                      <p>which allows you to become {this.state.responseArr.replace(/, ,/g, ", ")}. Again, if you choose so.</p>
                      <br />
                      <button className="introBtn" onClick={this.toggleSee}>
                        Continue
                      </button>
                    </div>
                  ):
                  (
                    <div className="embraceOut">
                      <p>Excellent. From here on, try to embrace your peace cycle:</p>
                      <br />
                      <p>You are {this.state.truthArr}</p>
                      <p>which allows you to become {this.state.responseArr.replace(/, ,/g, ", ")}. Again, if you choose so.</p>
                      <br />
                      <button className="introBtn" onClick={this.toggleSee}>
                        Continue
                      </button>
                    </div>
                  )
                }
                </div>
              </div>
            ) :!this.state.displayBtns ? (
              <div className="introHdiv">
                <img src={bulbAndOthers} alt="lightbulb conversing with others" className='bulbAndOthers'/>
                <div className='noBtnContainerIn' style={{ textAlign: "center" }}>
                <p>
                  Next step. Remember these words?
                  <br />
                  {this.state.priArr.replace(/, ,/g, ", ")}
                  <br />
                  Imagine that the people who knew you best could comment on 
                  these words. What would they say your truth was?
                  You are _____.
                </p>
                <img src={scrollUp} alt="scroll up button" className='scrollUpBtn' onClick={this.displayBtns}/>
                </div>
              </div>
              ) :
              // this is step A
              <div className="introHdiv">
                <img src={bulbAndOthers} alt="lightbulb conversing with others" className='bulbAndOthers'/>
                <div className='noBtnContainerOut' style={{ textAlign: "center" }}>
                <p>
                  Next step. Remember these words?
                  <br />
                  {this.state.priArr.replace(/, ,/g, ", ")}
                  <br />
                  Imagine that the people who knew you best could comment on 
                  these words. What would they say your truth was?
                  You are _____.
                </p>
                <img src={scrollUp} alt="scroll up button" className='scrollUpBtn' onClick={this.displayBtns}/>
                </div>
                {/* this is step B */}
                <div className='btnContainer'>                    
                  {truthBtns.map((truthBtn)=>{
                          return(
                              <button className='truthBtn' value={truthBtn} onClick={this.pushChoice}>{truthBtn}</button>
                          )
                      })}      
                      <br />
                      <input
                              onChange={this.handleChange}
                              id='custom'
                              type="text"
                              placeholder="Add Custom Truth Here"
                              required
                              className="customCopeInput"
                            />
                      <br />
                      <button className='customCopeBtn' onClick={this.pushCustomChoice}>
                              Add A Custom Truth
                      </button>
                      <br />
                      {this.state.truthArr}
                  </div>
              </div>
                
            }
          </div>
        )}
      </div>
    );
  }
}

export default IntroH;