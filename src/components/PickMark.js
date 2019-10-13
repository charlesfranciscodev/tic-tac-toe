import React, { Component } from "react";

class PickMark extends Component {
  render() {
    return (
      <div>
        <h1 className="title is-4 has-text-centered has-text-light pick-title">
          Player 1: Would you like to be X or O?
        </h1>
        
        <div className="buttons is-centered">
          <button className="button is-large is-danger">
            <span className="icon is-medium">
              <i class="fas fa-times"></i>
            </span>
          </button>
          <button className="button is-large is-link">
            <span className="icon is-medium">
              <i class="far fa-circle"></i>
            </span>
          </button>
        </div>

        <div id="back-button" className="centered">
          <button className="button is-large is-rounded">
            <span className="icon is-medium">
              <i class="fas fa-arrow-left"></i>
            </span>
            <span>Back</span>
          </button>
        </div>
      </div>
    )
  }
}

export default PickMark;
