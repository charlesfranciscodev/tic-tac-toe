import { combineReducers } from "redux";

import { pickGameMode } from "./pickGameMode.reducer";

const ROOT_REDUCER = combineReducers({
  pickGameMode
});

export default ROOT_REDUCER;
