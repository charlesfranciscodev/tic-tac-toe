import React, { Component } from "react";
import { PickGameMode } from "./PickGameMode";
import { PickMark } from "./PickMark";
import Board from "./Board";

import { connect } from "react-redux";
import { VIEW } from "../constants";

import "./Game.css";

class Game extends Component {
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
              <div id="board-inside">
                {component}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    "currentView": state.currentView
  }
}

const connectedGame = connect(mapStateToProps)(Game);
export {connectedGame as Game};
