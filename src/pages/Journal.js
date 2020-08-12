import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Journal = () => {
  const instructions = () => {
    alert(
      'Journal is designed to search for "pain" words through out your entry. Saving entries option is coming very soon.'
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
  const [userText, setUserText] = useState("");
  const [pain, setPain] = useState(false);
  const [ignore, setIgnore] = useState(false);

  const updateUserText = (event) => {
    setUserText(event.target.value);

    const userWords = userText.split(" ");
    if (ignore === false) {
      if (
        keywords.some((w) => userWords[userWords.length - 1].indexOf(w) !== -1)
      ) {
        inPain();
        userWords.push(null);
      }
    }
  };

  const justIgnore = () => {
    setIgnore(true);
    setPain(!pain);
  };

  function inPain() {
    setPain(!pain);
    console.log("in pain alert");
  }

  return (
    <div
      id="backdrop"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        maxWidth: "100%",
      }}
    >
      {pain ? (
        <div className="backDrop">
          You might be in pain! Analyzing your four steps might help!
          <br />
          <NavLink to="/Cycle/CycleHome">
            <Button
              style={{ borderRadius: "25px" }}
              variant="contained"
              color="primary"
            >
              Go to cycle
            </Button>
          </NavLink>
          <Button
            style={{ borderRadius: "25px" }}
            variant="contained"
            color="primary"
            onClick={justIgnore}
          >
            Just ignore it.
          </Button>
        </div>
      ) : null}
      <div style={{ color: "black", height: "100vh" }}>
        <h2>Journal</h2>
        <p onClick={instructions}>tap Here For Instructions</p>
        <div className="customInput">
          <input
            name="journalInput"
            type="text"
            onChange={updateUserText}
            id="journalInput"
            value={userText}
            required
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Journal Input</label>
        </div>
      </div>
    </div>
  );
};

export default Journal;
