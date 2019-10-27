import { GAME_MODE, RESET } from "../constants";

export function pickGameMode(state=GAME_MODE.UNKNOWN, action) {
  switch (action.type) {
    case GAME_MODE.SINGLE_PLAYER:
    case GAME_MODE.MULTIPLAYER:
      return action.type;
    case RESET:
      return GAME_MODE.UNKNOWN;
    default:
      return state;
  }
}
