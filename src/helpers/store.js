import { createStore } from "redux";
import COMBINED_REDUCERS from "../reducers";
import { VIEW } from "../constants";

let initialState = {
  currentView: VIEW.PICK_GAME_MODE_VIEW
};

export const STORE = createStore(
  COMBINED_REDUCERS,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
