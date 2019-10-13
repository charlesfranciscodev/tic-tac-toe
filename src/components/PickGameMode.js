import React, { Component } from "react";

class PickGameMode extends Component {
  render() {
    return (
      <div>
        <h1 className="title is-4 has-text-centered has-text-light pick-title">How do you want to play?</h1>
        
        <div className="buttons is-centered">
          <span className="button is-danger is-rounded">One Player</span>
          <span className="button is-link is-rounded">Two Players</span>
        </div>
      </div>
    )
  }
}

export default PickGameMode;
