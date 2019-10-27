import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Provider } from "react-redux";
import { STORE } from "./helpers";

ReactDOM.render(
  <Provider store={STORE}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
