import React, { Component } from "react";
import { PickGameMode } from "./PickGameMode";
import { PickMark } from "./PickMark";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";

import { connect } from "react-redux";
import { VIEW, GRID, MARK, PLAYER, GAME_RESULT } from "../constants";

import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "scores": [0, 0]
    };
  }
  
  static getDerivedStateFromProps(props, state) {
    let nextState = null;
    if (props.gameResult !== state.prevPropsGameResult && props.gameResult !== GAME_RESULT.DRAW) {
      let nextStateScores = [...state.scores];
      if (props.gameResult === GAME_RESULT.WIN) {
        nextStateScores[0] += 1;
      } else if (props.gameResult === GAME_RESULT.LOSS) {
        nextStateScores[1] += 1;
      }
      if (props.gameResult)
      nextState = {
        prevPropsGameResult: props.gameResult,
        scores: nextStateScores,
      };
    }
    return nextState;
  }

  render() {
    const { currentView } = this.props;
    const scores = this.state.scores;
    let component;

    if (currentView === VIEW.PICK_GAME_MODE_VIEW) {
      component = <PickGameMode />;
    } else if (currentView === VIEW.PICK_MARK_VIEW) {
      component = <PickMark />;
    } else if (currentView === VIEW.BOARD_VIEW) {
      component = <Board />;
    }

    return (
      <div>
        <section className="section">
          <div className="container centered">
            <div id="board-outside" className="centered">
              <div id="board-inside">
                {component}
              </div>
            </div>
          </div>
        </section>

        {currentView === VIEW.BOARD_VIEW &&
          <ScoreBoard scores={scores}/>
        }
      </div>
    )
  }
}

function computeGameResult(currentPlayer) {
  if (currentPlayer === PLAYER.PLAYER_ONE) {
    return GAME_RESULT.WIN;
  } else if (currentPlayer === PLAYER.PLAYER_TWO) {
    return GAME_RESULT.LOSS;
  }
}

function computeDerivedGameResultState(grid, currentPlayer) {
  // check rows
  for (let row = 0; row < GRID.SIZE; row++) {
    let mark = grid[row][0];
    if (mark === MARK.EMPTY) {
      break;
    }
    let gameOver = true;
    for (let column = 1; column < GRID.SIZE; column++) {
      if (grid[row][column] !== mark) {
        gameOver = false;
        break;
      }
    }
    if (gameOver) {
      return computeGameResult(currentPlayer);
    }
  }

  // check columns
  for (let column = 0; column < GRID.SIZE; column++) {
    let mark = grid[0][column];
    if (mark === MARK.EMPTY) {
      break;
    }
    let gameOver = true;
    for (let row = 1; row < GRID.SIZE; row++) {
      if (grid[row][column] !== mark) {
        gameOver = false;
        break;
      }
    }
    if (gameOver) {
      return computeGameResult(currentPlayer);
    }
  }

  // check diagonals
  // top left to bottom right
  let gameOver = true;
  let mark = grid[0][0];
  if (mark !== MARK.EMPTY) {
    for (let i = 1; i < GRID.SIZE; i++) {
      if (grid[i][i] !== mark) {
        gameOver = false;
        break;
      }
    }
    if (gameOver) {
      return computeGameResult(currentPlayer);
    }
  }

  // bottom left to top right
  gameOver = true;
  let row = 2;
  let column = 0;
  mark = grid[row][column];
  if (mark !== MARK.EMPTY) {
    while (column < GRID.SIZE) {
      if (grid[row][column] !== mark) {
        gameOver = false;
        break;
      }
      row--;
      column++;
    }

    if (gameOver) {
      return computeGameResult(currentPlayer);
    }
  }

  return GAME_RESULT.DRAW;
}

function mapStateToProps(state) {
  let gameResult = computeDerivedGameResultState(state.grid, state.currentPlayer);

  return {
    "currentView": state.currentView,
    "gameResult": gameResult
  }
}

const connectedGame = connect(mapStateToProps)(Game);
export {connectedGame as Game};
