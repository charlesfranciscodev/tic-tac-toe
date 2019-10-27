import { MARK, RESET } from "../constants";

export function pickMark(state=MARK.EMPTY, action) {
  switch (action.type) {
    case MARK.CROSS:
    case MARK.NOUGHT:
      return action.type;
    case RESET:
      return MARK.EMPTY;
    default:
      return state;
  }
}
