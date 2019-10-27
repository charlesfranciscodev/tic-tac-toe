import React, { Component } from "react";
import { connect } from "react-redux";

import { MARK, GRID, PLAYER, GAME_MODE } from "../constants";
import { ACTIONS } from "../actions";

import { generateRandomMove } from "../helpers";

import "./Board.css";

class BoardCell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(row, column) {
    const { dispatch, currentGame } = this.props;

    // check for play on occupied cell
    if (this.props.currentGame.grid[row][column] !== MARK.EMPTY) {
      return;
    }

    dispatch(ACTIONS.handleAction(GRID.PLAY_MOVE, row, column));

    // check if it is the AI's turn to play (based on the previous state)
    if (currentGame.currentPlayer === PLAYER.PLAYER_ONE && currentGame.gameMode === GAME_MODE.SINGLE_PLAYER) {
      let nextRow = generateRandomMove();
      let nextColumn = generateRandomMove();
      // validate the move
      while ((nextRow === row && nextColumn === column) || currentGame.grid[nextRow][nextColumn] !== MARK.EMPTY) {
        nextRow = generateRandomMove();
        nextColumn = generateRandomMove();
      }

      dispatch(ACTIONS.handleAction(GRID.PLAY_MOVE, nextRow, nextColumn));
    }
  }

  render() {
    const {row, column, mark} = this.props;

    let icon = "";
    if (mark === MARK.CROSS) {
      icon = <i className="fas fa-times fa-3x"></i>;
    } else if (mark === MARK.NOUGHT) {
      icon = <i className="far fa-circle fa-3x"></i>;
    }

    return (
      <div className="cell" onClick={() => this.handleClick(row, column)}>
        <span className="icon">
          {icon}
        </span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    "currentGame": state.currentGame,
  }
}

const connectedBoardCell = connect(mapStateToProps)(BoardCell);
export {connectedBoardCell as BoardCell};
