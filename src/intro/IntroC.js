import React, { Component } from 'react';
import trigger from '../imgs/triggerEvent.png';
import '../theme/introC.css';

class introC extends Component {
    constructor(props) {
        super(props);
        this.state = {
          newEvent: "",
          exit: false
        };
        this.handleChange = this.handleChange.bind(this);
      }

    //Handle input change.
    handleChange(e) {
    this.setState({ newEvent: e.target.value });
    console.log(this.state.newEvent);
  }

    //Save input to local storage & Exit C
    introBtn=()=>{
    localStorage.setItem("event", this.state.newEvent)
    this.setState({exit: true})
    setTimeout(()=>{
    const { toggleC } = this.props;
    this.props.toggleC();
    }, 700)
    }
    
    render() { 
        return ( 
            <div className="introCcontainer">
            <img src={trigger} alt="red, broken lightbulb" className='triggerEvent'/>
            {
              !this.state.exit ? (
            <div>
            <div className="topIntroInCharlie">
            <p className='pThree'>This might be a little difficult but try to think of a situation where you had conflict
            or stuggled with negative feelings. Maybe you fought with a friend
            last night, maybe you got nervous meeting someone or got outraged for some reason.</p>
            </div>
            <hr className='introHrIn'/>
            <div className="bottomIntroInCharlie">
            <input
                onChange={this.handleChange}
                type="text"
                placeholder="Type that situation here..."
                required
                className="introInput"
            />
            <br />
            <btn className='introRouterBtn' onClick={this.introBtn}>
                Submit
            </btn>
            </div>
            </div>
              ) :
              <div>
                <div className="topIntroOutCharlie">
            <p className='pThree'>This might be a little difficult but try to think of a situation where you had conflict
            or stuggled with negative feelings. Maybe you fought with a friend
            last night, maybe you got nervous meeting someone or got outraged for some reason.</p>
            </div>
            <hr className='introHrOut'/>
            <div className="bottomIntroOutCharlie">
            <input
                onChange={this.handleChange}
                type="text"
                placeholder="Type that situation here..."
                required
                className="introInput"
            />
            <br />
            <btn className='introRouterBtn'>
                Submit
            </btn>
            </div>
              </div>
            }
            </div>
         );
    }
}
 
export default introC;