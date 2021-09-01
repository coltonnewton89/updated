import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../theme/SocialMedia.css'
import facebookIcon from '../imgs/facebookIcon.png'
import youtubeIcon from '../imgs/youtubeIcon.png'

class SocialMedia extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='socialMediaContainerTwo'>
                <div className='topSocial'>
                    <p className='socialP'>Selfteck has additional resources available to help you get the most out of this app and your four steps.
                        Feel free to click the links below for more details.
                    </p>
                </div>
                <hr className='socialHrIn'/>
                <div className="bottomSocial">
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
                            <br/>
                            <NavLink
                            className='noFocus socialBtn'
                            to="/Cycle"
                            style={{ color: "#F1FAEE" }}            
                            >
                            Return to Cycle
                            </NavLink>  
                        
                    </div> 
                
            </div>
         );
    }
}
 
export default SocialMedia;