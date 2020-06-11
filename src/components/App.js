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
    gameOver: false,
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
    const currentRoll = updateCurrentRoll(lastScore);
    const gameNotOver =
      gameState.rolls < 19 ||
      (gameState.rolls === 19 &&
        (isSpare(lastScore, gameState.pins.slice(-1)[0]) ||
          isStrike(pins.slice(-1)[0])));

    setGameState((prevState) => {
      return {
        ...prevState,
        frames: frame,
        frameScores: frameScore,
        pins: pins,
        rolls: currentRoll,
        gameOver: !gameNotOver,
      };
    });
  };

  const getUpdatedFrame = (lastScore) => {
    let newFrame;
    const { frames, rolls } = gameState;
    if (isEven(rolls) && !isBonusRoll(rolls)) {
      newFrame = [...frames];
      newFrame.push([lastScore]);
    } else {
      const newFrameScore = frames[getFrameIndex(frames)].concat([lastScore]);
      newFrame = frames.slice(0, getFrameIndex(frames)).concat([newFrameScore]);
    }

    return newFrame;
  };

  const getFrameScore = (lastScore) => {
    const { frames, rolls, frameScores, pins } = gameState;
    const currentScore =
      frameScores && frameScores.length > 0 ? frameScores.slice(-1)[0] : 0;
    if (
      (!isEven(rolls) &&
        !isStrike(lastScore) &&
        !isSpare(pins.slice(-1)[0], lastScore)) ||
      isBonusRoll(rolls)
    ) {
      const frameScore = isBonusRoll(rolls)
        ? frames[getFrameIndex(frames)].slice(-1)[0] +
          frames[getFrameIndex(frames)].slice(-2)[0] +
          lastScore
        : frames[getFrameIndex(frames)].slice(-1)[0] + lastScore;

      if (
        isStrike(pins.slice(-1)[0]) &&
        !isStrike(pins.slice(-2)[0]) &&
        rolls === 19
      ) {
        return frameScores;
      }

      if (isStrike(pins.slice(-2)[0]) && rolls > 2 && rolls < 20) {
        const bonus = strikeBonus(pins.slice(-1)[0], lastScore);
        const previousFrame = bonus + currentScore;

        return isStrike(pins.slice(-1)[0]) && rolls === 19
          ? frameScores.concat(previousFrame)
          : frameScores.concat(previousFrame, frameScore + previousFrame);
      }
      const updatedFrameScore = frameScores.concat(currentScore + frameScore);

      return updatedFrameScore;
    } else if (isStrike(pins.slice(-2)[0]) && rolls > 2 && rolls < 20) {
      const bonus = strikeBonus(pins.slice(-1)[0], lastScore);

      return frameScores.concat(currentScore + bonus);
    } else if (isEven(rolls) && isSpare(pins.slice(-2)[0], pins.slice(-1)[0])) {
      const spareFrame = 10 + lastScore;

      return frameScores.concat(currentScore + spareFrame);
    }

    return frameScores;
  };

  const updateCurrentRoll = (lastScore) => {
    const { rolls } = gameState;
    if (isStrike(lastScore) && isEven(rolls) && rolls < 18) {
      return rolls + 2;
    } else {
      return rolls + 1;
    }
  };

  const isEven = (number) => {
    return number % 2 === 0;
  };

  const isSpare = (roll1, roll2) => {
    return roll1 + roll2 === 10;
  };

  const isStrike = (pins) => {
    const strike = 10;
    return pins === strike;
  };

  const getFrameIndex = (frames) => {
    return frames.length - 1;
  };

  const isBonusRoll = (rolls) => {
    return rolls === 20;
  };

  const strikeBonus = (roll1, roll2) => 10 + roll1 + roll2;

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
          gameOver={gameState.gameOver}
          enterScore={updateScores}
          lastRoll={gameState.pins.slice(-1)[0]}
          rolls={gameState.rolls}
        />
      </div>
    </div>
  );
};

export default App;
