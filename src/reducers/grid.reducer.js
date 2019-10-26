import { MARK, GRID, RESET } from "../constants";

let initialState = [];

for (let i = 0; i < GRID.SIZE; i++) {
  initialState.push([]);
  for (let j = 0; j < GRID.SIZE; j++) {
    initialState[i].push(MARK.EMPTY);
  }
}

export function playMove(state=initialState, action) {
  switch (action.type) {
    case GRID.PLAY_MOVE:
      let newState = [...state];
      newState[action.row][action.column] = action.mark;
      return newState;
    case RESET:
      return initialState;
    default:
      return state;
  }
}
