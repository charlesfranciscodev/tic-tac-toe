import { VIEW, GAME_MODE } from "../constants";

export function view(state = "", action) {
  switch (action.type) {
    case GAME_MODE.SINGLE_PLAYER:
    case GAME_MODE.MULTIPLAYER:
      return VIEW.PICK_MARK_VIEW;
    default:
      return state;
  }
}
