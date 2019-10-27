import React, { Component } from "react";
import { PickGameMode } from "./PickGameMode";
import { PickMark } from "./PickMark";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";

import { connect } from "react-redux";
import { VIEW } from "../constants";

import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "scores": props.currentGame.scores
    };
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
              <div id="board-inside" className="centered">
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

function mapStateToProps(state) {
  return {
    "currentView": state.currentView,
    "currentGame": state.currentGame
  }
}

const connectedGame = connect(mapStateToProps)(Game);
export {connectedGame as Game};
