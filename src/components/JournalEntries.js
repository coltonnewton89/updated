import React, { Component } from "react";
import firebase from "../FireConfig";
import _ from "lodash";
import "../theme/JournalEntries.css";

class JournalEntries extends Component {
  state = {
    userEntries: [],
    viewLarge: false,
    largeKey: "",
    targetDelete: null,
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

  deleteItem = (e) => {
    this.setState({ targetDelete: e.target.value });
    var oldEntry = JSON.parse(localStorage.getItem("currentUser")) || [];
    for (let i = 0; i < oldEntry.length; i++) {
      if (i === parseInt(this.state.targetDelete)) {
        oldEntry.pop(i);
        localStorage.setItem("currentUser", JSON.stringify(oldEntry));
        const { toggleView } = this.props;
        this.props.toggleView();
      }
    }
  };

  renderLargePost() {
    return _.map(this.state.userEntries, (post, key) => {
      if (key == this.state.largeKey) {
        return (
          <div className="largeJournalContainer" key={key}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div className="journalBtnContainer">
              <button
                className="journalBtnTwo"
                onClick={this.cancelView}
                value={key}
              >
                Return To Entries
              </button>
              <button
                className="journalBtnDelete"
                onClick={this.deleteItem}
                value={key}
              >
                Delete
              </button>
            </div>
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
    let pulledEntry = JSON.parse(localStorage.getItem("currentUser"));
    this.setState({ userEntries: pulledEntry });
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
