import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import projectsReducer from "./projects_reducer";
import storiesReducer from "./stories_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  stories: storiesReducer
});

export default entitiesReducer;