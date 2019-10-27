import { RESET } from "../constants";

function reset() {
  return {
    "type": RESET
  }
}

function handleAction(type, row=-1, column=-1) {
  return {
    "type": type,
    "row": row,
    "column": column,
  }
}

export const ACTIONS = {
  reset,
  handleAction
}
