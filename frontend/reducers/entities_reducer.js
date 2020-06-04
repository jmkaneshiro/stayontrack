import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import projectsReducer from "./projects_reducer";
import storiesReducer from "./stories_reducer";
import openStoryReducer from "./focused_item_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  stories: storiesReducer,
  focused_item: openStoryReducer,
});

export default entitiesReducer;