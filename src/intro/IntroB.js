import React, { Component } from 'react';
import HexBg from '../components/HexBg';
import '../theme/introB.css'

class IntroB extends Component {
    state = { 
      exit: false
     }

    //Exit B
    introBtn=()=>{
      this.setState({exit: true})
      setTimeout(()=>{
        const { toggleB } = this.props;
        this.props.toggleB();
      },700)
        }
    render() { 
        return ( 
            <div className="introBcontainer">
              <HexBg/>
                {
                  !this.state.exit ? 
                  <div>
                    <div className='topIntroInBravo'>
                      <p className='pOne'>Welcome to SelfTeck. We're glad you're here!</p>
                    </div>
                    <hr className='introHrIn'/>
                    <div className="bottomIntroInBravo">
                      <p className='pTwo'>Let's get you set up by identifying anything preventing you from moving to your peace.</p>
                        <btn className='introBtn' onClick={this.introBtn}>
                        Continue
                        </btn>
                    </div> 
                  </div> : 
                  <div>
                    <div className='topIntroOutBravo'>
                      <p className='pOne'>Welcome to SelfTeck. We're glad you're here!</p>
                    </div>
                    <hr className='introHrOut'/>
                    <div className="bottomIntroOutBravo">
                      <p className='pTwo'>Let's get you set up by identifying anything preventing you from moving to your peace.</p>
                        <btn className='introBtn' onClick={this.introBtn}>
                        Continue
                        </btn>
                    </div>
                  </div>
                }               
            </div>
         );
    }
}
 
export default IntroB;