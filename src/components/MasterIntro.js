import React, { Component } from "react";
import IntroB from "../intro/IntroB";
import IntroC from "../intro/IntroC";
import IntroD from "../intro/IntroD";
import IntroE from "../intro/IntroE";
import IntroF from "../intro/IntroF";
import IntroG from "../intro/IntroG";
import IntroH from "../intro/IntroH";
import "../theme/MasterIntro.css";

class MasterIntro extends Component {
  state = {
    introB: false,
    introC: false,
    introD: false,
    introE: false,
    introF: false,
    introG: false,
    introH: false,
  };

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

  toggleH = () => {
    this.setState({ introH: true });
    const { toggleMasterIntro } = this.props;
    this.props.toggleMasterIntro();
  };

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
          <IntroH toggleH={this.toggleH} />
        ) : null}
      </div>
    );
  }
}

export default MasterIntro;
