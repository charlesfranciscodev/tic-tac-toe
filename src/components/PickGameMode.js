import React, { Component } from "react";

import { connect } from "react-redux";
import { ACTIONS } from "../actions";
import { GAME_MODE } from "../constants";

class PickGameMode extends Component {
  constructor(props) {
    super(props);
    this.handleSinglePlayerButtonClick = this.handleSinglePlayerButtonClick.bind(this);
    this.handleMultiPlayerButtonClick = this.handleMultiPlayerButtonClick.bind(this);
  }

  handleSinglePlayerButtonClick(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(ACTIONS.pickGameMode(GAME_MODE.SINGLE_PLAYER));
  }

  handleMultiPlayerButtonClick(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(ACTIONS.pickGameMode(GAME_MODE.MULTIPLAYER));
  }

  render() {
    return (
      <div>
        <h1 className="title is-4 has-text-centered has-text-light">How do you want to play?</h1>
        
        <div className="buttons is-centered">
          <span className="button is-danger is-rounded" onClick={this.handleSinglePlayerButtonClick}>One Player</span>
          <span className="button is-link is-rounded" onClick={this.handleMultiPlayerButtonClick}>Two Players</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps() {
  return {};
}

const connectedPickGameMode = connect(mapStateToProps)(PickGameMode);
export {connectedPickGameMode as PickGameMode};
