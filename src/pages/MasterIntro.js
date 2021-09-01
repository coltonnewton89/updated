import React, { Component } from 'react';
import IntroB from '../Intro/IntroB'
import IntroC from '../Intro/IntroC'
import IntroD from '../Intro/IntroD'
import IntroE from '../Intro/IntroE'
import IntroF from '../Intro/IntroF'
import IntroG from "../Intro/IntroG";
import IntroH from "../Intro/IntroH";
//import css

class MasterIntro extends Component {
    state = { 
        introB: false,
        introC: false,
        introD: false,
        introE: false,
        introF: false,
        introG: false,
        introH: false,
     }

     toggleB = () => {
        this.setState({ introB: true });
      };
    
      toggleC = () => {
        this.setState({ introC: true });
      };
    
      toggleD = () => {
        this.setState({ introD: true });
      };
    
      toggleE = () => {
        this.setState({ introE: true });
      };
    
      toggleF = () => {
        this.setState({ introF: true });
      };
    
      toggleG = () => {
        this.setState({ introG: true });
      };
    
      toggleHome=()=>{
        localStorage.setItem("cupcake", "crumb");
        const { toggleMasterIntro } = this.props
        this.props.toggleMasterIntro();
      }


    render() { 
        return ( 
            <div className="masterIntroContainer">
                {this.state.introB ? null : <IntroB toggleB={this.toggleB} />}
        {this.state.introB && !this.state.introC ? (
          <IntroC toggleC={this.toggleC} />
        ) : null}
        {this.state.introC && !this.state.introD ? (
          <IntroD toggleD={this.toggleD} />
        ) : null}
        {this.state.introD && !this.state.introE ? (
          <IntroE toggleE={this.toggleE} />
        ) : null}
        {this.state.introE && !this.state.introF ? (
          <IntroF toggleF={this.toggleF} />
        ) : null}
        {this.state.introF && !this.state.introG ? (
          <IntroG toggleG={this.toggleG} />
        ) : null}
        {this.state.introG && !this.state.introH ? (
          <IntroH toggleHome={this.toggleHome} />
        ) : null}
            </div>
         );
    }
}
 
export default MasterIntro;