import { combineReducers } from "redux";

import { view } from "./view.reducer";
import { pickGameMode } from "./pickGameMode.reducer";
import { pickMark } from "./pickMark.reducer";
import { playMove } from "./grid.reducer";
import { player } from "./player.reducer";

const COMBINED_REDUCERS = combineReducers({
  currentView: view,
  gameMode: pickGameMode,
  playerOneMark: pickMark,
  grid: playMove,
  currentPlayer: player
});

export default COMBINED_REDUCERS;
