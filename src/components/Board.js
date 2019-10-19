import React, { Component } from "react";

import "./Board.css";

class Board extends Component {
  render() {
    return (
      <div id="grid">
        {/* Top Row */}
        <div className="row">
          <div className="cell"></div>
          <div className="cell vertical"></div>
          <div className="cell"></div>
        </div>
        {/* Middle Row */}
        <div className="row">
          <div className="cell horizontal"></div>
          <div className="cell horizontal vertical"></div>
          <div className="cell horizontal"></div>
        </div>
        {/* Bottom Row */}
        <div className="row">
          <div className="cell"></div>
          <div className="cell vertical"></div>
          <div className="cell"></div>
        </div>
      </div>
    )
  }
}

export default Board;
