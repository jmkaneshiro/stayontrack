import React from "react";
import ReactDOM from "react-dom";

import * as SessionApiUtil from "./util/session_api_util";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  // TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = SessionApiUtil.signup;
  window.login = SessionApiUtil.login;
  window.logout = SessionApiUtil.logout;
  // TESTING
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to StayOnTrack</h1>, root);
});