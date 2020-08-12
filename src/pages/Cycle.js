import React, { Component } from 'react';
import Slides from '../components/Slides'
import '../theme/Cycle.css'

class Cycle extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="cycleContainer">
                <Slides/>
            </div>
         );
    }
}
 
export default Cycle;