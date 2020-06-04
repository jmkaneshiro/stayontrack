import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import * as ProjectApiUtil from "./util/projects_api_util";
import * as ProjectActions from "./actions/project_actions";
import * as StoryActions from "./actions/story_actions";
import * as StoriesApiUtil from "./util/stories_api_util";
import * as UsersApiUtil from "./util/users_api_util";

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
  window.ApiMembership = ProjectApiUtil.createProjectMembership;
  window.createProjectMembership = ProjectActions.createProjectMembership;
  window.deleteStory = StoryActions.deleteStory;
  // TESTING
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});