import React, { Component } from 'react';
import '../theme/introE.css'
import painBtns from './painBtns';
import scrollUp from '../imgs/scrollUp.gif';
import painBulb from '../imgs/painBulb.png'

class introE extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        priArr: [],
        event: '',
        displayBtns: false,
     };
     this.pushCustomChoice = this.pushCustomChoice.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }
    

    handleChange(e) {
        this.setState({ _priArr: e.target.value });
      }

    pushCustomChoice(e) {
        e.preventDefault();
        if (this.state.priArr.length <= 1) {
          this.setState({
            priArr: this.state.priArr.concat(this.state._priArr + ", "),
          });
        }
        if (this.state.priArr.length === 2) {
          this.setState({
            priArr: this.state.priArr.concat("and " + this.state._priArr),
          });
        }
        document.getElementById("custom").value = "";
    
        console.log(this.state.priArr);
      }

    pushChoice = (e) => {
      var needle = this.state.priArr.indexOf(e.target.value + ", ")
      if(needle > -1){
        this.state.priArr.splice(needle, 1);
        e.target.style= null;
        this.setState({priArr: this.state.priArr});
      }else{
        if (this.state.priArr.length <= 1) {
          this.setState({
            priArr: this.state.priArr.concat(e.target.value + ", "),
          });
        }
        if (this.state.priArr.length == 2) {
          this.setState({
            priArr: this.state.priArr.concat("and " + e.target.value),
          });       
          localStorage.setItem("pain", this.state.priArr)
        }
        
        console.log(this.state.priArr);
        e.target.style.backgroundColor = "rgb(11, 167, 159)";
        e.target.style.border = "1px solid #f1faee";
        e.target.style.scale = "1.3";
      };
      };

    componentDidUpdate(){
        if (this.state.priArr.length == 3) {     
            localStorage.setItem("pain", this.state.priArr);
            const { toggleE } = this.props;
            this.props.toggleE();
        } 
    }

    displayBtns=()=>{
        this.setState({displayBtns: !this.state.displayBtns})
    }

     componentDidMount=()=>{
         this.setState({event: localStorage.getItem("event")})
     }

    render() { 
        return ( 
            <div className="introEcontainer">
                <img src={painBulb} className='painBulb' alt="red lightbulb" />
                {
                    !this.state.displayBtns ? 
                    <div className="noBtnContainerIn">
                        <p>
                        Alright, Have you ever thought about the emotions or thoughts that might keep you
                        in this place of pain? Look again at the triggering
                        situation. <p>"{this.state.event}"</p>
                        Now choose three words that best describe how you were feeling or
                        believing? I felt _____.
                        </p>
                        <img src={scrollUp} alt="scroll up button" className='scrollUpBtn' onClick={this.displayBtns}/>
                    </div> :
                    <div className="introEcontainer">
                        <div className="noBtnContainerOut">
                        <p>
                        Alright, Have you ever thought about the emotions or thoughts that might keep you
                        in this place of pain? Look again at the triggering
                        situation. <p>"{this.state.event}"</p>
                        Now choose three words that best describe how you were feeling or
                        believing? I felt _____.
                        </p>
                        <img src={scrollUp} alt="scroll up button" className='scrollUpBtn' onClick={this.displayBtns}/>
                        </div>
                        {/* btn container */}
                        <div className="btnContainer">
                          <p>I felt _____.</p>
                        {painBtns.map((painBtn)=>{
                            return(
                                <button className='painBtn' value={painBtn} onClick={this.pushChoice}>{painBtn}</button>
                            )
                        })}
                        <br />
                        <input
                              onChange={this.handleChange}
                              id='custom'
                              type="text"
                              placeholder="Add Custom Pain Here"
                              required
                              className="customPainInput"
                            />
                        <br />
                        <button className='customPainBtn' onClick={this.pushCustomChoice}>Add A Custom Pain</button>
                        <br />
                        <p className='priDisplay'>{this.state.priArr}</p>
                        </div>
                    </div>
                }
            </div>
         );
    }
}
 
export default introE;