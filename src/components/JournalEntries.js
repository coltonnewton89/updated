import React, { Component } from "react";
import firebase from "../FireConfig";
import _ from "lodash";
import "../theme/JournalEntries.css";

class JournalEntries extends Component {
  state = {
    userEntries: [],
    viewLarge: false,
    largeKey: "",
  };

  viewLarge = (e) => {
    this.setState({ viewLarge: !this.state.viewLarge });
    console.log(this.state.viewLarge);
    this.setState({ largeKey: e.target.value });
    console.log(this.state.largeKey);
  };

  cancelView = () => {
    this.setState({ viewLarge: !this.state.viewLarge });
    this.setState({ largeKey: "" });
  };

  renderLargePost() {
    return _.map(this.state.userEntries, (post, key) => {
      if (key == this.state.largeKey) {
        return (
          <div className="largeJournalContainer" key={key}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button
              className="journalBtnTwo"
              onClick={this.cancelView}
              value={key}
            >
              Return To Entries
            </button>
          </div>
        );
      }
    });
  }

  renderSmallPosts() {
    return _.map(this.state.userEntries, (post, key) => {
      return (
        <div className="smallJournalContainer" key={key}>
          <h2>{post.title}</h2>
          <p>
            {post.body.length > 30
              ? `${post.body.substring(0, 30)}...`
              : post.body}
          </p>
          <button className="journalBtn" onClick={this.viewLarge} value={key}>
            View
          </button>
        </div>
      );
    });
  }

  componentDidMount() {
    const currentUser = firebase.auth().currentUser.uid.toString();
    firebase
      .database()
      .ref(`/userPosts/${currentUser}`)
      .on("value", (snapshot) => {
        this.setState({ userEntries: snapshot.val() });
      });
  }

  render() {
    return (
      <div className="parentEntryContainer">
        {this.state.largeKey !== "" ? (
          <div>{this.renderLargePost()}</div>
        ) : (
          <div>{this.renderSmallPosts()}</div>
        )}
      </div>
    );
  }
}

export default JournalEntries;
