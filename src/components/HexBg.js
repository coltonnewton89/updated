import React, { Component } from 'react';
import '../theme/hex.css'
import hexagon from '../imgs/hexagon.png'

class HexBg extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="hexContainer">
                <img src={hexagon} alt="img of hexagon" className='hexOne'/>
                <img src={hexagon} alt="img of hexagon" className='hexTwo' />
                <img src={hexagon} alt="img of hexagon" className='hexThree' />
                <img src={hexagon} alt="img of hexagon" className='hexFour' />
                <img src={hexagon} alt="img of hexagon" className='hexFive' />
                <img src={hexagon} alt="img of hexagon" className='hexSix' />
                <img src={hexagon} alt="img of hexagon" className='hexSeven' />
            </div>
         );
    }
}
 
export default HexBg;