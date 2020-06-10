import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Controls = (props) => {
  const disableButton = (number) => {
    if (props.rolls % 2 === 0 || props.rolls === 0) {
      return false;
    }

    return props.lastRoll + number > 10;
  };

  return (
    <div className="Container">
      <button
        id="pin0"
        disabled={disableButton(0)}
        onClick={() => props.enterScore(0)}
      >
        0
      </button>
      <button
        id="pin1"
        disabled={disableButton(1)}
        onClick={() => props.enterScore(1)}
      >
        1
      </button>
      <button
        id="pin2"
        disabled={disableButton(2)}
        onClick={() => props.enterScore(2)}
      >
        2
      </button>
      <button
        id="pin3"
        disabled={disableButton(3)}
        onClick={() => props.enterScore(3)}
      >
        3
      </button>
      <button
        id="pin4"
        disabled={disableButton(4)}
        onClick={() => props.enterScore(4)}
      >
        4
      </button>
      <button
        id="pin5"
        disabled={disableButton(5)}
        onClick={() => props.enterScore(5)}
      >
        5
      </button>
      <button
        id="pin6"
        disabled={disableButton(6)}
        onClick={() => props.enterScore(6)}
      >
        6
      </button>
      <button
        id="pin7"
        disabled={disableButton(7)}
        onClick={() => props.enterScore(7)}
      >
        7
      </button>
      <button
        id="pin8"
        disabled={disableButton(8)}
        onClick={() => props.enterScore(8)}
      >
        8
      </button>
      <button
        id="pin9"
        disabled={disableButton(9)}
        onClick={() => props.enterScore(9)}
      >
        9
      </button>
      <button
        id="pin10"
        disabled={disableButton(10)}
        onClick={() => props.enterScore(10)}
      >
        10
      </button>
    </div>
  );
};

Controls.propTypes = {};

export default Controls;
