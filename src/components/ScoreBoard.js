import React, { Component } from "react";

class ScoreBoard extends Component {
  render() {
    const scores = this.props.scores;

    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-narrow">
            <table className="table">
              <thead>
                <tr>
                  <th>Player 1</th>
                  <th>Player 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{scores[0]}</td>
                  <td>{scores[1]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default ScoreBoard;
