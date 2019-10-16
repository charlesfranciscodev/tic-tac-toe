import { GAME_MODE } from "../constants";

export function pickGameMode(state = "", action) {
  switch (action.type) {
    case GAME_MODE.SINGLE_PLAYER:
    case GAME_MODE.MULTIPLAYER:
      return action.type;
    default:
      return state;
  }
}
