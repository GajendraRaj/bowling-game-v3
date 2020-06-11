import React from "react";
import PropTypes from "prop-types";
import Constants from "../../constants";
import "./index.css";

const Scorecard = (props) => {
  const { frameScores, totalScore, frames } = props;

  const renderScores = (frame, roll) => {
    return frames[frame] ? frames[frame][roll] : "";
  };

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
              {renderScores(0, 0)}
            </td>
            <td id="r2" colSpan="3">
              {renderScores(0, 1)}
            </td>
            <td id="r3" colSpan="3">
              {renderScores(1, 0)}
            </td>
            <td id="r4" colSpan="3">
              {renderScores(1, 1)}
            </td>
            <td id="r5" colSpan="3">
              {renderScores(2, 0)}
            </td>
            <td id="r6" colSpan="3">
              {renderScores(2, 1)}
            </td>
            <td id="r7" colSpan="3">
              {renderScores(3, 0)}
            </td>
            <td id="r8" colSpan="3">
              {renderScores(3, 1)}
            </td>
            <td id="r9" colSpan="3">
              {renderScores(4, 0)}
            </td>
            <td id="r10" colSpan="3">
              {renderScores(4, 1)}
            </td>
            <td id="r11" colSpan="3">
              {renderScores(5, 0)}
            </td>
            <td id="r12" colSpan="3">
              {renderScores(5, 1)}
            </td>
            <td id="r13" colSpan="3">
              {renderScores(6, 0)}
            </td>
            <td id="r14" colSpan="3">
              {renderScores(6, 1)}
            </td>
            <td id="r15" colSpan="3">
              {renderScores(7, 0)}
            </td>
            <td id="r16" colSpan="3">
              {renderScores(7, 1)}
            </td>
            <td id="r17" colSpan="3">
              {renderScores(8, 0)}
            </td>
            <td id="r18" colSpan="3">
              {renderScores(8, 1)}
            </td>
            <td id="r19" colSpan="2">
              {renderScores(9, 0)}
            </td>
            <td id="r20" colSpan="2">
              {renderScores(9, 1)}
            </td>
            <td id="r21" colSpan="2">
              {renderScores(9, 2)}
            </td>
            <td id="total-score" colSpan="6">
              {totalScore}
            </td>
          </tr>
          <tr>
            <td id="frame1Score" colSpan="6">
              {frameScores[0]}
            </td>
            <td id="frame2Score" colSpan="6">
              {frameScores[1]}
            </td>
            <td id="frame3Score" colSpan="6">
              {frameScores[2]}
            </td>
            <td id="frame4Score" colSpan="6">
              {frameScores[3]}
            </td>
            <td id="frame5Score" colSpan="6">
              {frameScores[4]}
            </td>
            <td id="frame6Score" colSpan="6">
              {frameScores[5]}
            </td>
            <td id="frame7Score" colSpan="6">
              {frameScores[6]}
            </td>
            <td id="frame8Score" colSpan="6">
              {frameScores[7]}
            </td>
            <td id="frame9Score" colSpan="6">
              {frameScores[8]}
            </td>
            <td id="frame10Score" colSpan="6">
              {frameScores[9]}
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
