import React, { Component } from "react";
import { BoardColumn } from "./BoardColumn";
import { GRID } from "../constants";
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
}

export default Board;
