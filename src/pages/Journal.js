import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import JournalEntries from "../components/JournalEntries";
import "../theme/Journal.css";

const Journal = () => {
  const instructions = () => {
    alert(
      "Through out your entry, Journal is designed to search for certain 'pain' words. This section is saved to your phone's local storage only and does not post or share any of your journal data to any external source to ensure your privacy."
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
  const [currentNewEntry, setNewEntry] = useState([]);
  const [viewEntry, _viewEntry] = useState(false);

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

  /*=====TRY THIS WITH LOCAL STATE...
  REMEBER YOU CAN USE _LODASH=====*/
  //Save entry
  const saveUserEntry = () => {
    var oldEntry = JSON.parse(localStorage.getItem("currentUser")) || [];
    const newEntry = {
      title: userTitle,
      body: userText,
    };
    oldEntry.push(newEntry);
    localStorage.setItem("currentUser", JSON.stringify(oldEntry));
    setUserTitle("");
    setUserText("");
  };

  const viewUserEntry = () => {
    _viewEntry(!viewEntry);
  };

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
      ) : viewEntry ? (
        <JournalEntries />
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
          <button className="journalSave" onClick={saveUserEntry}>
            Save New Entry
          </button>
        </div>
      )}
      {viewEntry ? (
        <button className="journalBtn" onClick={viewUserEntry}>
          Create New Entry
        </button>
      ) : (
        <button className="journalBtn" onClick={viewUserEntry}>
          View Entries
        </button>
      )}
    </div>
  );
};

export default Journal;
