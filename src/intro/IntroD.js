import React, { Component } from 'react';
import '../theme/introD.css'
import scrollUp from '../imgs/scrollUp.gif'
import copeBtns from './copeBtns';
import reflection from '../imgs/selfReflection.png'

class introD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copeArr: [],
        event: '',
        displayBtns: false,
        extend: false,
    };
    this.pushCustomChoice = this.pushCustomChoice.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ _copeArr: e.target.value });
  }

  pushCustomChoice(e) {
    e.preventDefault();
    if (this.state.copeArr.length <= 1) {
      this.setState({
        copeArr: this.state.copeArr.concat(this.state._copeArr + ", "),
      });
    }
    if (this.state.copeArr.length === 2) {
      this.setState({
        copeArr: this.state.copeArr.concat("and " + this.state._copeArr),
      });
    }
    document.getElementById("custom").value = "";

    console.log(this.state.copeArr);
  }

     componentDidUpdate(){
      if (this.state.copeArr.length == 3) {     
        localStorage.setItem("cope", this.state.copeArr);
          const { toggleD } = this.props;
          this.props.toggleD();
      } 
     }

     pushChoice = (e) => {
      var needle = this.state.copeArr.indexOf(e.target.value + ", ")
      if(needle > -1){
        this.state.copeArr.splice(needle, 1);
        e.target.style= null;
        this.setState({copeArr: this.state.copeArr})
      }else{
        if (this.state.copeArr.length <= 1) {
          this.setState({
            copeArr: this.state.copeArr.concat(e.target.value + ", "),
          });
        }
        if (this.state.copeArr.length == 2) {
          this.setState({
            copeArr: this.state.copeArr.concat("and " + e.target.value),
          });       
          localStorage.setItem("cope", this.state.copeArr)
        }
        
        console.log(this.state.copeArr);
        e.target.style.backgroundColor = "rgb(11, 167, 159)";
        e.target.style.border = "1px solid #f1faee";
        e.target.style.scale = "1.3";
      };
      };
    

    displayBtns=()=>{
        this.setState({displayBtns: !this.state.displayBtns})
    }

    componentDidMount=()=>{
        this.setState({event: localStorage.getItem("event")})
    }


    render() { 
        return ( 
            <div className="introDcontainer">
              <img src={reflection} alt="lightbulb selfreflecting in mirror" className='reflection'/>
                    {
                    !this.state.displayBtns ? 
                    <div className="noBtnContainerIn">
                    <h3>You said: {this.state.event}</h3>
                    <p>How did you act when this took place? I became _____.</p>
                    
                    <img src={scrollUp} alt="scroll up button" className='scrollUpBtn' onClick={this.displayBtns}/>
                    </div>
                    :
                    <div className="introDcontainer">
                        <div className="noBtnContainerOut">
                        <h3>You said: {this.state.event}</h3>
                        <p>Now, quick confession time. Choose three words from below that best
                        describe how you acted in this situation? I became _____.</p>
                        
                        <img src={scrollUp} alt="scroll up button" className='scrollUpBtn' onClick={this.displayBtns}/>
                        </div>


                        <div className="btnContainer">
                        {/* mapping copeBtns */}
                        <p>I became _____.</p>
                        {copeBtns.map((copeBtn)=>{
                            return(
                                <button className='copeBtn' value={copeBtn} onClick={this.pushChoice}>{copeBtn}</button>
                            )
                        })}
                        <br />
                            <input
                              onChange={this.handleChange}
                              id='custom'
                              type="text"
                              placeholder="Add Custom Cope Here"
                              required
                              className="customCopeInput"
                            />
                            <br />
                            <button className='customCopeBtn' onClick={this.pushCustomChoice}>
                              Add A Custom Cope
                            </button>
                            <br />
                            <p className='copeDisplay'>{this.state.copeArr}</p>
                        </div>
                    </div>
                    
                    }                    
            </div>
         );
    }
}
 
export default introD;