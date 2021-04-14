import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./assets/styles/styles.scss";
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';

var mountNode = document.getElementById("app");
ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <Router>
      <App />
    </Router>
  </StateProvider>,
  mountNode
);
