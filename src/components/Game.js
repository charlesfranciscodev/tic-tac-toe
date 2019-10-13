import React, { Component } from "react";
// import PickGameMode from "./PickGameMode"
import PickMark from "./PickMark"
import "./Game.css";

class Game extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <div className="container centered">
            <div id="board-outside" className="centered">
              <div id="board-inside">
                {/* <PickGameMode /> */}
                <PickMark />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Game;
