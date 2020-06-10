import React, { useState, useEffect } from "react";
import Constants from "../constants";
import Scorecard from "./scorecard";
import Controls from "./controls";
import "./App.css";

const App = () => {
  const initialState = {
    frames: [],
    frameScores: [],
    pins: [],
    rolls: 0,
  };
  const [gameState, setGameState] = useState(initialState);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    setTotalScore(gameState.frameScores.slice(-1)[0]);
  }, [gameState.frameScores]);

  const updateScores = (lastScore) => {
    const frame = getUpdatedFrame(lastScore);
    const frameScore = getFrameScore(lastScore);
    const pins = gameState.pins.concat(lastScore);

    setGameState((prevState) => {
      return {
        ...prevState,
        frames: frame,
        frameScores: frameScore,
        pins: pins,
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
    const { frames, rolls, frameScores, pins } = gameState;
    const currentScore =
      frameScores && frameScores.length > 0 ? frameScores.slice(-1)[0] : 0;
    if (
      !isEven(rolls) &&
      lastScore !== 10 &&
      !isSpare(pins.slice(-1)[0], lastScore)
    ) {
      const frameScore = frames[getFrameIndex(frames)].slice(-1)[0] + lastScore;
      const updatedFrameScore = frameScores.concat(currentScore + frameScore);
      return updatedFrameScore;
    } else if (isEven(rolls) && isSpare(pins.slice(-2)[0], pins.slice(-1)[0])) {
      const spareFrame = 10 + lastScore;
      return frameScores.concat(currentScore + spareFrame);
    }

    return frameScores;
  };

  const isEven = (number) => {
    return number % 2 === 0;
  };

  const isSpare = (roll1, roll2) => {
    return roll1 + roll2 === 10;
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
          totalScore={totalScore}
        />
        <Controls
          enterScore={updateScores}
          lastRoll={gameState.pins.slice(-1)[0]}
          rolls={gameState.rolls}
        />
      </div>
    </div>
  );
};

export default App;
