import React, { Component } from "react";
import { connect } from "react-redux";

import { BoardCell } from "./BoardCell";

import { GRID } from "../constants";

import "./Board.css";

class BoardColumn extends Component {
  render() {
    const {columnIndex, currentGame} = this.props;

    const columnArray = [];
    for (let rowIndex = 0; rowIndex < GRID.SIZE; rowIndex++) {
      columnArray.push(
        <BoardCell
          row={rowIndex}
          column={columnIndex}
          mark={currentGame.grid[rowIndex][columnIndex]}
          key={rowIndex * GRID.SIZE + columnIndex}
        />
      )
    }

    return (
      <div className="grid-column">
        {columnArray}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    "currentGame": state.currentGame,
  }
}

const connectedBoardColumn = connect(mapStateToProps)(BoardColumn);
export {connectedBoardColumn as BoardColumn};
