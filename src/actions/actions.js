function pickGameMode(gameMode) {
  return dispatch => {
    dispatch({
      "gameMode": gameMode
    });
  }
}

export const actions = {
  pickGameMode
}
