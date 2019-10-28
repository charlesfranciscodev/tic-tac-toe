import React, { Component } from "react";
import { connect } from "react-redux";

import { MARK, GRID } from "../constants";
import { ACTIONS } from "../actions";

import "./Board.css";

class BoardCell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(row, column) {
    const { dispatch } = this.props;

    // check for play on occupied cell
    if (this.props.currentGame.grid[row][column] !== MARK.EMPTY) {
      return;
    }

    dispatch(ACTIONS.handleAction(GRID.PLAY_MOVE, row, column));
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
