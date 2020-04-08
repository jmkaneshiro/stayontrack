import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import * as SessionActions from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  // TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = SessionActions.signup;
  window.login = SessionActions.login;
  window.logout = SessionActions.logout;
  // TESTING
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});