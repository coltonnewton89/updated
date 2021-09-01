import React, { Component } from 'react';
import '../theme/appMain.css'
import '../theme/introH.css'
import truthBtns from '../Intro/truthBtns'
import scrollUp from '../imgs/scrollUp.gif'
import bulbAndOthers from '../imgs/bulbAndOthers.png'





class EditPeace extends Component {
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

  componentDidUpdate = () => {
    if (this.state.truthArr.length === 3) {      
      localStorage.setItem("truth", this.state.truthArr); 
      console.log("sent to truth");
      const { toggleResponse } = this.props;
      this.props.toggleResponse();
      // this.props.toggleTruth()
    }
  };

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
    this.setState({priArr: localStorage.getItem("pain")})
  }

  // componentDidMount(){
  //   this.setState({responseArr: localStorage.getItem("response")})
  // }

  displayBtns= () => {
    this.setState({displayBtns: !this.state.displayBtns})
  }


  render() { 
    return ( 
      <div>
        {
          !this.state.displayBtns ? (
            <div className="introHdiv">
              <img src={bulbAndOthers} alt="lightbulb conversing with others" className='bulbAndOthers'/>
              <div className='noBtnContainerIn' style={{ textAlign: "center" }}>
              <p>Pain: "{this.state.priArr.replace(/, ,/g, ", ")}"</p>
              <p>
                  Your pain is often an illusion. Try to replace this lie with what
                  you know to be true about you. I might feel this pain but in
                  reality I am or I can choose to become _____.          
              </p>
              <img src={scrollUp} alt="scroll up button" className='scrollUpBtn' onClick={this.displayBtns}/>
              </div>
            </div>
            ) :
            // this is step A
            <div className="introHdiv">
              <img src={bulbAndOthers} alt="lightbulb conversing with others" className='bulbAndOthers'/>
              <div className='noBtnContainerOut' style={{ textAlign: "center" }}>
              <p>Pain: "{this.state.priArr.replace(/, ,/g, ", ")}"</p>
              <p>
                  Your pain is often an illusion. Try to replace this lie with what
                  you know to be true about you. I might feel this pain but in
                  reality I am or I can choose to become _____.          
              </p>
              <img src={scrollUp} alt="scroll up button" className='scrollUpBtn' onClick={this.displayBtns}/>
              </div>
              {/* this is step B */}
              <div className='btnContainer'>  
                <p>I am or I can choose to become _____.</p>                  
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
     );
  }
}
 
export default EditPeace;
