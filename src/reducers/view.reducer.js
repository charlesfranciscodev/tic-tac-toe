import { VIEW, GAME_MODE, MARK, RESET } from "../constants";

export function view(state=VIEW.PICK_GAME_MODE_VIEW, action) {
  switch (action.type) {
    case GAME_MODE.SINGLE_PLAYER:
    case GAME_MODE.MULTIPLAYER:
      return VIEW.PICK_MARK_VIEW;
    case MARK.CROSS:
    case MARK.NOUGHT:
      return VIEW.BOARD_VIEW;
    case RESET:
      return VIEW.PICK_GAME_MODE_VIEW;
    default:
      return state;
  }
}
