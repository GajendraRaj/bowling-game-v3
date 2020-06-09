import React, { useState } from "react";
import Constants from "../constants";
import Scorecard from "./scorecard";
import Controls from "./controls";
import "./App.css";

const App = () => {
  const initialState = {
    frames: [],
    frameScores: [],
    rolls: 0,
  };
  const [gameState, setGameState] = useState(initialState);

  const updateScores = (lastScore) => {
    const newFrame = [...gameState.frames];
    newFrame.push([lastScore]);

    const currentScore =
      gameState.frameScore && gameState.frameScore.length > 0
        ? gameState.frameScore.slice(-1)[0]
        : 0;
    let updatedFrameScore;
    if (gameState.rolls % 2 !== 0) {
      const frameScore =
        gameState.frames[gameState.frames.length - 1].slice(-1)[0] + lastScore;
      updatedFrameScore = gameState.frameScores.concat(
        currentScore + frameScore
      );
    }

    setGameState((prevState) => {
      return {
        ...prevState,
        frames: newFrame,
        frameScores: updatedFrameScore
          ? updatedFrameScore
          : prevState.frameScores,
        rolls: prevState.rolls + 1,
      };
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{Constants.APP_TITLE}</h1>
      </header>
      <div className="Game">
        <Scorecard
          frames={gameState.frames}
          frameScores={gameState.frameScores}
        />
        <Controls enterScore={updateScores} />
      </div>
    </div>
  );
};

export default App;
