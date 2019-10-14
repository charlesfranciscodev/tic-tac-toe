import GAME_MODE from "../constants";

export function pickGameMode(state = {}, action) {
  switch (action.gameMode) {
    case GAME_MODE.SINGLE_PLAYER:
    case GAME_MODE.TWO_PLAYERS:
      return {
        gameMode: action.gameMode
      };
    default:
      return state;
  }
}
