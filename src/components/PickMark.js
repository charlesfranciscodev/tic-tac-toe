import React, { Component } from "react";

import { connect } from "react-redux";
import { ACTIONS } from "../actions";
import { MARK } from "../constants";

class PickMark extends Component {
  constructor(props) {
    super(props);
    this.handleCrossButtonClick = this.handleCrossButtonClick.bind(this);
    this.handleNoughtButtonClick = this.handleNoughtButtonClick.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  handleCrossButtonClick() {
    const { dispatch } = this.props;
    dispatch(ACTIONS.pickMark(MARK.CROSS));
  }

  handleNoughtButtonClick() {
    const { dispatch } = this.props;
    dispatch(ACTIONS.pickMark(MARK.NOUGHT));
  }

  handleBackButtonClick() {
    const { dispatch } = this.props;
    dispatch(ACTIONS.reset());
  }

  render() {
    return (
      <div>
        <h1 className="subtitle has-text-centered has-text-light">
          Player 1: Would you like to be X or O?
        </h1>
        
        <div className="buttons is-centered">
          <button className="button is-large is-danger" onClick={this.handleCrossButtonClick}>
            <span className="icon is-medium">
              <i className="fas fa-times"></i>
            </span>
          </button>
          <button className="button is-large is-link" onClick={this.handleNoughtButtonClick}>
            <span className="icon is-medium">
              <i className="far fa-circle"></i>
            </span>
          </button>
        </div>

        <div className="has-text-centered">
          <button className="button is-large is-rounded reset-button" onClick={this.handleBackButtonClick}>
            <span className="icon is-medium">
              <i className="fas fa-arrow-left"></i>
            </span>
            <span>Back</span>
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps() {
  return {};
}

const connectedPickMark = connect(mapStateToProps)(PickMark);
export {connectedPickMark as PickMark};


export default PickMark;
