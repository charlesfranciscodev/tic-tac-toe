import { RESET, GRID } from "../constants";

function pickGameMode(gameMode) {
  return {
    "type": gameMode
  };
}

function pickMark(mark) {
  return {
    "type": mark
  };
}

function reset() {
  return {
    "type": RESET
  }
}

function playMove(row, column, mark, player) {
  return {
    "type": GRID.PLAY_MOVE,
    "row": row,
    "column": column,
    "mark": mark,
    "player": player
  }
}

export const ACTIONS = {
  pickGameMode,
  pickMark,
  reset,
  playMove
}
