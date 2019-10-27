import React, { Component } from "react";
import { connect } from "react-redux";

import { PLAYER, MARK } from "../constants";
import { ACTIONS } from "../actions";

import "./Board.css";

class BoardCell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(row, column) {
    const { dispatch } = this.props;
    let mark = MARK.EMPTY;
    if (this.props.currentGame.currentPlayer === PLAYER.PLAYER_ONE) {
      mark = this.props.playerOneMark;
    } else if (this.props.currentGame.currentPlayer === PLAYER.PLAYER_TWO) {
      if (this.props.playerOneMark === MARK.CROSS) {
        mark = MARK.NOUGHT;
      } else if (mark === MARK.NOUGHT) {
        mark = MARK.CROSS;
      }
    }
    dispatch(ACTIONS.playMove(row, column, mark, this.props.currentGame.currentPlayer));
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
    "playerOneMark": state.playerOneMark
  }
}

const connectedBoardCell = connect(mapStateToProps)(BoardCell);
export {connectedBoardCell as BoardCell};
