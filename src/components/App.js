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
    const frame = getUpdatedFrame(lastScore);
    const frameScore = getFrameScore(lastScore);

    setGameState((prevState) => {
      return {
        ...prevState,
        frames: frame,
        frameScores: frameScore,
        rolls: prevState.rolls + 1,
      };
    });
  };

  const getUpdatedFrame = (lastScore) => {
    const newFrame = [...gameState.frames];
    newFrame.push([lastScore]);

    return newFrame;
  };

  const getFrameScore = (lastScore) => {
    const { frames, rolls, frameScores } = gameState;
    const currentScore =
      frameScores && frameScores.length > 0 ? frameScores.slice(-1)[0] : 0;
    if (!isEven(rolls)) {
      const frameScore = frames[getFrameIndex(frames)].slice(-1)[0] + lastScore;
      const updatedFrameScore = frameScores.concat(currentScore + frameScore);
      return updatedFrameScore;
    }

    return frameScores;
  };

  const isEven = (number) => {
    return number % 2 === 0;
  };

  const getFrameIndex = (frames) => {
    return frames.length - 1;
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
