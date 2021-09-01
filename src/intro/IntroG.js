import React, { Component } from 'react';
import responseBtns from './responseBtns';
import '../theme/introG.css'
import scrollUp from '../imgs/scrollUp.gif'
import castedLight from '../imgs/castedLightBulb.png'

class introG extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      responseArr: [],
      event: '',
      displayBtns: false,
   };
   this.pushCustomChoice = this.pushCustomChoice.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }
  

  handleChange(e) {
      this.setState({ _responseArr: e.target.value });
    }

  pushCustomChoice(e) {
      e.preventDefault();
      if (this.state.responseArr.length <= 1) {
        this.setState({
          responseArr: this.state.responseArr.concat(this.state._responseArr + ", "),
        });
      }
      if (this.state.responseArr.length === 2) {
        this.setState({
          responseArr: this.state.responseArr.concat("and " + this.state._responseArr),
        });
      }
      document.getElementById("custom").value = "";
  
      console.log(this.state.responseArr);
    }

  pushChoice = (e) => {
    var needle = this.state.responseArr.indexOf(e.target.value + ", ")
    if(needle > -1){
      this.state.responseArr.splice(needle, 1);
      e.target.style= null;
      this.setState({responseArr: this.state.responseArr});
    }else{
      if (this.state.responseArr.length <= 1) {
        this.setState({
          responseArr: this.state.responseArr.concat(e.target.value + ", "),
        });
      }
      if (this.state.responseArr.length == 2) {
        this.setState({
          responseArr: this.state.responseArr.concat("and " + e.target.value),
        });       
        localStorage.setItem("response", this.state.responseArr)
      }
      
      console.log(this.state.responseArr);
      e.target.style.backgroundColor = "rgb(11, 167, 159)";
      e.target.style.border = "1px solid #f1faee";
      e.target.style.scale = "1.3";
    };
    };
    
    componentDidUpdate(){
      if (this.state.responseArr.length == 3) {     
        localStorage.setItem("response", this.state.responseArr)
        const { toggleG } = this.props;
        this.props.toggleG();
      } 
  }

    displayBtns=()=>{
      this.setState({displayBtns: !this.state.displayBtns})
    }

    render() { 
        return ( 
            <div className="introGcontainer">
              <img src={castedLight} alt="Green Light Bulb" className='castedLight'/>
                {
                    !this.state.displayBtns ? 
                    <div className="noBtnContainerIn">
                        <p>
                        When feeling your best, how would you want to respond in most situations? 
                        Again, try to choose three words from below. I am or I can choose to be _____.
                        </p>
                        <img src={scrollUp} alt="scroll up button" className='scrollUpBtn' onClick={this.displayBtns}/>
                    </div> :
                    <div className="introGcontainer">
                      <div className="noBtnContainerOut">
                        <p>
                        When feeling your best, how would you want to respond in most situations? 
                        Again, try to choose three words from below. I am or I can choose to be _____.
                        </p>
                        <img src={scrollUp} alt="scroll up button" className='scrollUpBtn' onClick={this.displayBtns}/>
                    </div>
                      <div className="btnContainer">
                        I am or I can choose to be _____.
                        <p></p>
                        {responseBtns.map((responseBtn)=>{
                        return(
                            <button className='responseBtn' value={responseBtn} onClick={this.pushChoice}>{responseBtn}</button>
                        )
                      })}
                      <br />
                      <input
                              onChange={this.handleChange}
                              id='custom'
                              type="text"
                              placeholder="Add Custom response Here"
                              required
                              className="customCopeInput"
                            />
                      <br />
                      <button className='customCopeBtn' onClick={this.pushCustomChoice}>
                              Add A Custom Response
                      </button>
                      <br />
                      {this.state.responseArr}
                      <br />
                      </div>
                    </div>
                }
            </div>
         );
    }
}
 
export default introG;