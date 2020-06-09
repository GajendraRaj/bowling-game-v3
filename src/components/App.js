import React, { useState } from "react";
import Constants from "../constants";
import Scorecard from "./scorecard";
import Controls from "./controls";
import "./App.css";

const App = () => {
  const initialState = {
    frames: [],
  };
  const [gameState, setGameState] = useState(initialState);

  const updateScores = (lastScore) => {
    const newFrame = [...gameState.frames];
    newFrame.push([lastScore]);
    setGameState((prevState) => {
      return {
        ...prevState,
        frames: newFrame,
      };
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{Constants.APP_TITLE}</h1>
      </header>
      <div className="Game">
        <Scorecard frames={gameState.frames} />
        <Controls enterScore={updateScores} />
      </div>
    </div>
  );
};

export default App;
