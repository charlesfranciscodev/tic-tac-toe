import { combineReducers } from "redux";

import { view } from "./view.reducer";
import { handleAction } from "./game.reducer";

const COMBINED_REDUCERS = combineReducers({
  currentView: view,
  currentGame: handleAction,
});

export default COMBINED_REDUCERS;
