import React from "react";
import ReactDOM from "react-dom";

import * as SessionApiUtil from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
  // TESTING
  window.signup = SessionApiUtil.signup;
  window.login = SessionApiUtil.login;
  window.logout = SessionApiUtil.logout;
  // TESTING
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to StayOnTrack</h1>, root);
});