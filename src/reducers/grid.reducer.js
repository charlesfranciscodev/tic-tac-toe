import { MARK, GRID, RESET } from "../constants";

let INITIAL_STATE = [];

for (let i = 0; i < GRID.SIZE; i++) {
  INITIAL_STATE.push([]);
  for (let j = 0; j < GRID.SIZE; j++) {
    INITIAL_STATE[i].push(MARK.EMPTY);
  }
}

export function playMove(state=INITIAL_STATE, action) {
  switch (action.type) {
    case GRID.PLAY_MOVE:
      let newState = [...state];
      newState[action.row][action.column] = action.mark;
      return newState;
    case RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
}
