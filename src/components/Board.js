import React, { Component } from "react";
import { connect } from "react-redux";

import { BoardColumn } from "./BoardColumn";
import { GRID, PLAYER, GAME_MODE } from "../constants";
import { ACTIONS } from "../actions";

import { generateRandomMove } from "../helpers";

import "./Board.css";

class Board extends Component {
  render() {
    const array = [];
    for (let columnIndex = 0; columnIndex < GRID.SIZE; columnIndex++) {
      array.push(
        <BoardColumn columnIndex={columnIndex} key={columnIndex}/>
      )
    }

    return (
      <div className="centered">
        {array}
      </div>
    )
  }

  componentDidMount() {
    const { dispatch, currentGame } = this.props;

    // check if it is the AI's turn to play (first turn of the first game)
    if (currentGame.currentPlayer === PLAYER.PLAYER_TWO && currentGame.gameMode === GAME_MODE.SINGLE_PLAYER) {
      dispatch(ACTIONS.handleAction(GRID.PLAY_MOVE, generateRandomMove(), generateRandomMove()));
    }
  }
}

function mapStateToProps(state) {
  return {
    "currentGame": state.currentGame,
  }
}

const connectedBoard = connect(mapStateToProps)(Board);
export {connectedBoard as Board};
