import { combineReducers } from "redux";

import { view } from "./view.reducer";
import { pickGameMode } from "./pickGameMode.reducer";
import { pickMark } from "./pickMark.reducer";

const COMBINED_REDUCERS = combineReducers({
  currentView: view,
  gameMode: pickGameMode,
  playerOneMark: pickMark,
});

export default COMBINED_REDUCERS;
