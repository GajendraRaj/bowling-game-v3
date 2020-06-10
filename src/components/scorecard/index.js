import React from "react";
import PropTypes from "prop-types";
import Constants from "../../constants";
import "./index.css";

const Scorecard = (props) => {
  return (
    <div className="Container">
      <table id="table" className="Scorecard" cellPadding="1" cellSpacing="0">
        <tbody>
          <tr>
            <th colSpan="6">{Constants.FRAME_1}</th>
            <th colSpan="6">{Constants.FRAME_2}</th>
            <th colSpan="6">{Constants.FRAME_3}</th>
            <th colSpan="6">{Constants.FRAME_4}</th>
            <th colSpan="6">{Constants.FRAME_5}</th>
            <th colSpan="6">{Constants.FRAME_6}</th>
            <th colSpan="6">{Constants.FRAME_7}</th>
            <th colSpan="6">{Constants.FRAME_8}</th>
            <th colSpan="6">{Constants.FRAME_9}</th>
            <th colSpan="6">{Constants.FRAME_10}</th>
            <th colSpan="6">{Constants.TOTAL_SCORE}</th>
          </tr>
          <tr>
            <td id="r1" colSpan="3">
              {props.frames[0]}
            </td>
            <td id="r2" colSpan="3">
              {props.frames[1]}
            </td>
            <td id="r3" colSpan="3">
              {" "}
              {props.frames[2]}
            </td>
            <td id="r4" colSpan="3">
              {props.frames[3]}
            </td>
            <td id="r5" colSpan="3">
              {props.frames[4]}
            </td>
            <td id="r6" colSpan="3">
              {props.frames[5]}
            </td>
            <td id="r7" colSpan="3">
              {props.frames[6]}
            </td>
            <td id="r8" colSpan="3">
              {props.frames[7]}
            </td>
            <td id="r9" colSpan="3">
              {props.frames[8]}
            </td>
            <td id="r10" colSpan="3">
              {props.frames[9]}
            </td>
            <td id="r11" colSpan="3">
              {props.frames[10]}
            </td>
            <td id="r12" colSpan="3">
              {props.frames[11]}
            </td>
            <td id="r13" colSpan="3">
              {props.frames[12]}
            </td>
            <td id="r14" colSpan="3">
              {props.frames[13]}
            </td>
            <td id="r15" colSpan="3">
              {props.frames[14]}
            </td>
            <td id="r16" colSpan="3">
              {props.frames[15]}
            </td>
            <td id="r17" colSpan="3">
              {props.frames[16]}
            </td>
            <td id="r18" colSpan="3">
              {props.frames[17]}
            </td>
            <td id="r19" colSpan="2">
              {props.frames[18]}
            </td>
            <td id="r20" colSpan="2">
              {props.frames[19]}
            </td>
            <td id="r21" colSpan="2">
              {props.frames[20]}
            </td>
            <td id="total-score" colSpan="6">
              {props.totalScore}
            </td>
          </tr>
          <tr>
            <td id="frame1Score" colSpan="6">
              {props.frameScores[0]}
            </td>
            <td id="frame2Score" colSpan="6">
              {props.frameScores[1]}
            </td>
            <td id="frame3Score" colSpan="6">
              {props.frameScores[2]}
            </td>
            <td id="frame4Score" colSpan="6">
              {props.frameScores[3]}
            </td>
            <td id="frame5Score" colSpan="6">
              {props.frameScores[4]}
            </td>
            <td id="frame6Score" colSpan="6">
              {props.frameScores[5]}
            </td>
            <td id="frame7Score" colSpan="6">
              {props.frameScores[6]}
            </td>
            <td id="frame8Score" colSpan="6">
              {props.frameScores[7]}
            </td>
            <td id="frame9Score" colSpan="6">
              {props.frameScores[8]}
            </td>
            <td id="frame10Score" colSpan="6">
              {props.frameScores[9]}
            </td>
            <td id="total-score" colSpan="6"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Scorecard.propTypes = {};

export default Scorecard;
