import { RESET } from "../constants";

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

export const ACTIONS = {
  pickGameMode,
  pickMark,
  reset
}
