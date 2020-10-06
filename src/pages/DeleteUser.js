import React, { Component } from "react";
import firebase from "../FireConfig";
import { NavLink } from "react-router-dom";
import facebookIcon from "../menuImgs/facebookIcon.png";
import youtubeIcon from "../menuImgs/youtubeIcon.png";
import "../theme/DeleteUser.css";

class DeleteUser extends Component {
  state = {
    displayWarning: false,
    displayReset: false,
  };

  deleteUser = () => {
    var user = firebase.auth().currentUser;

    user
      .delete()
      .then(function () {
        alert(
          "Your account has been sucessfully deleted. You can create a new account at any time if you so choose to."
        );
      })
      .catch(function (error) {
        alert(error);
      });
  };

  toggleDisplayWarning = () => {
    this.setState({ displayWarning: !this.state.displayWarning });
  };

  toggleDisplayReset = () => {
    this.setState({ displayReset: !this.state.displayReset });
  };

  clearAll = () => {
    localStorage.clear();
    alert("Your account has sucessfully been reset.");
  };

  render() {
    return (
      <div className="deleteUserContainer">
        {this.state.displayWarning ? (
          <div className="warning">
            <h2>Are you sure you want to delete your user account?</h2>
            <button className="deleteUserBtn" onClick={this.deleteUser}>
              Delete User
            </button>
          </div>
        ) : this.state.displayReset ? (
          <div className="resetHome">
            <h2>
              Resetting your account will not reset your login information. To
              reset just your login information, navigate to Account Setttings
              -- Reset Password.
            </h2>
            <ul>
              <li>
                To continue, Click{" "}
                <p className="resetReset" onClick={this.clearAll}>
                  Here
                </p>
              </li>
              <li>Otherwise, just click "Cancel" to exit.</li>
            </ul>
          </div>
        ) : (
          <div className="deleteHome">
            <p>
              SelfTeck was designed with hopes that one day it's user would come
              to point resulting in the reduction of use within the app. That
              said, before you go:
            </p>
            <ul>
              <li>
                If you do feel like SelfTeck has helped in some manor, you do
                not have to delete the app. You can close the application and
                re-open at a later time if inclined to do so.
              </li>
              <li>
                You can mute/change notifications via Account Settings -- Change
                Notification Timing.
              </li>
              <li>
                You can simply reset you're account{" "}
                <p className="displayReset" onClick={this.toggleDisplayReset}>
                  here.
                </p>
              </li>
              <li>
                You can delete your account{" "}
                <p
                  className="displayWarning"
                  onClick={this.toggleDisplayWarning}
                >
                  here.
                </p>
              </li>
            </ul>

            <p>
              One more thing! If you are looking for more content you can click
              on the appropriate icon below to visit us on facebook or youtube.
            </p>
            <div className="socialMediaContainer">
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
            </div>
          </div>
        )}
        <NavLink
          exact
          to="/Cycle"
          className="deleteCancelBtn"
          activeStyle={{ color: "#e56b6f" }}
        >
          Cancel
        </NavLink>
      </div>
    );
  }
}

export default DeleteUser;
