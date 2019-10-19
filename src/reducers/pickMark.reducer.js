import { MARK, RESET } from "../constants";

export function pickMark(state="", action) {
  switch (action.type) {
    case MARK.CROSS:
    case MARK.NOUGHT:
      return action.type;
    case RESET:
      return "";
    default:
      return state;
  }
}
