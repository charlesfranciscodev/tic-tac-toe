import { combineReducers } from "redux";

import { pickGameMode } from "./pickGameMode.reducer";
import { view } from "./view.reducer";

const COMBINED_REDUCERS = combineReducers({
  gameMode: pickGameMode,
  currentView: view
});

export default COMBINED_REDUCERS;
