import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Plugins } from "@capacitor/core";
import "../theme/Journal.css";

const Journal = () => {
  const instructions = () => {
    alert(
      'Journal is designed to search for "pain" words through out your entry. This section is saved to your phone and does not share any of your journal data to any selfteck database to ensure your privacy.'
    );
  };

  var keywords = [
    "unloved",
    "unworthy",
    "insignificant",
    "alone",
    "worthless",
    "devalued",
    "defective",
    "inadequate",
    "rejected",
    "unacceptable",
    "hopeless",
    "unwanted",
    "abandoned",
    "unsafe",
    "insecure",
    "a failure",
    "fearful",
    "powerless",
    "out of control",
    "controlled",
    "vulnerable",
    "disconnected",
    "betrayed",
    "invalidated",
    "not good enough",
  ];

  //setting up hook for journal input with function
  const [userTitle, setUserTitle] = useState("");
  const [userText, setUserText] = useState("");
  const [pain, setPain] = useState(false);
  const [ignore, setIgnore] = useState(false);
  const [completeUser, _completeUser] = useState([]);

  const updateUserTitle = (event) => {
    setUserTitle(event.target.value);
  };

  const updateUserText = (event) => {
    setUserText(event.target.value);
    //findPain
    const userWords = userText.split(" ");
    if (ignore === false) {
      if (
        keywords.some((w) => userWords[userWords.length - 1].indexOf(w) !== -1)
      ) {
        inPain();
        userWords.push(null);
      }
    }
    console.log(userText);
  };

  //Ignore findPain
  const justIgnore = () => {
    setIgnore(true);
    setPain(!pain);
  };

  //trigger painAlert
  function inPain() {
    setPain(!pain);
    console.log("in pain alert");
  }

  //Save entry

  // function saveItem() {
  //   localStorage.setItem(
  //     "userInput",
  //     JSON.stringify([
  //       {
  //         title: userTitle,
  //         body: userText,
  //       },
  //     ])
  //   );
  // }

  // React.useEffect(() => {
  //   const userValue = localStorage.getItem("userInput");
  //   _completeUser(JSON.parse(userValue));
  // });

  return (
    <div className="journalContainer">
      {pain ? (
        <div className="painAlert">
          <p>You might be in pain! Analyzing your four steps might help!</p>
          <NavLink to="/Cycle">
            <button className="journalBtn">Go to cycle</button>
          </NavLink>
          <button
            className="journalBtn"
            variant="contained"
            color="primary"
            onClick={justIgnore}
          >
            Ignore
          </button>
        </div>
      ) : (
        <div className="newJournal">
          <h2>Journal</h2>
          <p className="question" onClick={instructions}>
            <small>Questions/Who see's this?</small>
          </p>
          <label htmlFor="journalTitle">Title:</label>
          <input
            type="text"
            className="journalTitle"
            onChange={updateUserTitle}
          />
          <label htmlFor="journalBody">Body:</label>
          <input
            name="journalInput"
            type="text"
            onChange={updateUserText}
            className="journalBody"
            value={userText}
            required
          />
          <button className="journalSave">
            Save New Entry
          </button>
        </div>
      )}
    </div>
  );
};

export default Journal;
