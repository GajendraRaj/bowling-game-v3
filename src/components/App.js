import React, { useState } from "react";
import Constants from "../constants";
import Scorecard from "./scorecard";
import Controls from "./controls";
import "./App.css";

const App = () => {
  const [gameState, setGameState] = useState([]);

  const updateScores = (lastScore) => {
    const newFrame = [...gameState];
    newFrame.push([lastScore]);
    setGameState(newFrame);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{Constants.APP_TITLE}</h1>
      </header>
      <div className="Game">
        <Scorecard frames={gameState} />
        <Controls enterScore={updateScores} />
      </div>
    </div>
  );
};

export default App;
