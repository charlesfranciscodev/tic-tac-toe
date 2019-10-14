import { GAME_MODE } from "../constants";

export function pickGameMode(state = {}, action) {
  switch (action.gameMode) {
    case GAME_MODE.SINGLE_PLAYER:
    case GAME_MODE.MULTIPLAYER:
      return {
        gameMode: action.gameMode
      };
    default:
      return state;
  }
}
