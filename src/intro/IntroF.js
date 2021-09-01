import React, { Component } from 'react';
import moveToPeace from '../imgs/moveToPeace.png'
import '../theme/introF.css'

class IntroF extends Component {
    state = { 
        exit: false,
     }


    introBtn=()=>{
        this.setState({exit: !this.state.exit})
        setTimeout(() => {
        const { toggleF } = this.props;
        this.props.toggleF();
        }, 700);
        }
    render() { 
        return ( 
            <div className="introFcontainer">
                <img src={moveToPeace} alt="lightbulb standing over broken one." className='moveToPeace'/>
                {
                    !this.state.exit ? (
                    <div className="letsFixIn">
                        <p>
                        Let's move away from your pain cycle for a second and develop a new
                        way of thinking and responding.
                        </p>
                        <btn onClick={this.introBtn} className='introBtn'>
                        Continue
                        </btn>
                    </div>
                    ) :
                    (
                    <div className='letsFixOut'>
                        <p>
                        Let's move away from your pain cycle for a second and develop a new
                        way of thinking and responding.
                        </p>
                        <btn onClick={this.introBtn} className='introBtn'>
                        Continue
                        </btn>
                    </div>
                    )
                }
            </div>
         );
    }
}
 
export default IntroF;