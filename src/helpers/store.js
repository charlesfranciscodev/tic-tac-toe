import { createStore } from "redux";
import ROOT_REDUCER from "../reducers";

export const STORE = createStore(
  ROOT_REDUCER,
);

