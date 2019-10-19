import { RESET, GRID, PLAYER } from "../constants";

function generateRandomState() {
  if (Math.random() < 0.5) {
    return PLAYER.PLAYER_ONE;
  } else {
    return PLAYER.PLAYER_TWO;
  }
}

let initialState = generateRandomState();

export function player(state=initialState, action) {
  switch (action.type) {
    case GRID.PLAY_MOVE:
      if (action.player === PLAYER.PLAYER_ONE) {
        return PLAYER.PLAYER_TWO;
      }
      return PLAYER.PLAYER_ONE;
    case RESET:
      return generateRandomState();
    default:
      return state;
  }
}
