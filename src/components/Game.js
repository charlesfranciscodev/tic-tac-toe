import React, { Component } from "react";

class Game extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="centered">
              <div id="boardOutside" className="centered">
                <div id="boardInside">
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Game;
