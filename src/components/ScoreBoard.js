import React, { Component } from "react"
import { connect } from "react-redux";

import { PLAYER, GAME_MODE } from "../constants";

class ScoreBoard extends Component {
  render() {
    const COMPUTER_HEADER = "Computer";
    let playerTwoHeader = "Player 2";
    let currentPlayer = this.props.currentGame.currentPlayer;

    if (currentPlayer === PLAYER.PLAYER_TWO && this.props.currentGame.gameMode === GAME_MODE.SINGLE_PLAYER) {
      currentPlayer = COMPUTER_HEADER;
      playerTwoHeader = COMPUTER_HEADER;
    }

    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-narrow">
            <table className="table">
              <thead>
                <tr>
                  <th>Current Player</th>
                  <th>Player 1</th>
                  <th>{playerTwoHeader}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{currentPlayer}</td>
                  <td>{this.props.currentGame.scores[0]}</td>
                  <td>{this.props.currentGame.scores[1]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    "currentGame": state.currentGame,
  }
}

const connectedScoreBoard = connect(mapStateToProps)(ScoreBoard);
export {connectedScoreBoard as ScoreBoard};
