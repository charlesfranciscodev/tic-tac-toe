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

export const ACTIONS = {
  pickGameMode,
  pickMark
}
