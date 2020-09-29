import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./router/router";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules";

const store = createStore(rootReducer)

require("./assets/css/global.css");

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
