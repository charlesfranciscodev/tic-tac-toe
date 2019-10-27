import React, { Component } from "react";
import { connect } from "react-redux";

import { PickGameMode } from "./PickGameMode";
import { PickMark } from "./PickMark";
import { Board } from "./Board";
import { ScoreBoard } from "./ScoreBoard";

import { ACTIONS } from "../actions";
import { VIEW } from "../constants";

import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.resetButtonClick = this.resetButtonClick.bind(this);
  }

  resetButtonClick() {
    const { dispatch } = this.props;
    dispatch(ACTIONS.reset());
  }

  render() {
    const { currentView } = this.props;
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
              <div id="board-inside" className="centered">
                {component}
              </div>
            </div>
          </div>
        </section>

        {currentView === VIEW.BOARD_VIEW &&
          <div>
            <ScoreBoard />
            <div className="has-text-centered">
              <button className="button is-medium is-info reset-button" onClick={this.resetButtonClick}>
                Reset All
              </button>
            </div>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    "currentView": state.currentView,
  }
}

const connectedGame = connect(mapStateToProps)(Game);
export {connectedGame as Game};
