import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Controls = (props) => {
  return (
    <div className="Container">
      <button id="pin0" onClick={() => props.enterScore(0)}>
        0
      </button>
      <button id="pin1" onClick={() => props.enterScore(1)}>
        1
      </button>
      <button id="pin2" onClick={() => props.enterScore(2)}>
        2
      </button>
      <button id="pin3" onClick={() => props.enterScore(3)}>
        3
      </button>
      <button id="pin4" onClick={() => props.enterScore(4)}>
        4
      </button>
      <button id="pin5" onClick={() => props.enterScore(5)}>
        5
      </button>
      <button id="pin6" onClick={() => props.enterScore(6)}>
        6
      </button>
      <button id="pin7" onClick={() => props.enterScore(7)}>
        7
      </button>
      <button id="pin8" onClick={() => props.enterScore(8)}>
        8
      </button>
      <button id="pin9" onClick={() => props.enterScore(9)}>
        9
      </button>
      <button id="pin10" onClick={() => props.enterScore(10)}>
        10
      </button>
    </div>
  );
};

Controls.propTypes = {};

export default Controls;
