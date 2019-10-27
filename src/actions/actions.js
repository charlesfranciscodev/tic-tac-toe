import { RESET, MARK } from "../constants";

function reset() {
  return {
    "type": RESET
  }
}

function handleAction(type, row=-1, column=-1, mark=MARK.EMPTY) {
  return {
    "type": type,
    "row": row,
    "column": column,
    "mark": mark,
  }
}

export const ACTIONS = {
  reset,
  handleAction
}
