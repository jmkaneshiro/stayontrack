import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import * as SessionActions from "./actions/session_actions";
import * as ProjectActions from "./actions/project_actions";

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };

    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  // TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = SessionActions.signup;
  window.login = SessionActions.login;
  window.logout = SessionActions.logout;
  window.createProject = ProjectActions.createProject;
  window.fetchProject = ProjectActions.fetchProject;
  window.fetchProjects = ProjectActions.fetchProjects;
  // TESTING
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});