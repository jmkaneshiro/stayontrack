import { RECEIVE_PROJECT, RECEIVE_PROJECTS } from "../actions/project_actions";

const projectsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_PROJECTS:
      return Object.assign({}, oldState, action.projects);
    case RECEIVE_PROJECT:
      return Object.assign({}, oldState, { [action.project.id]: action.project });
    default:
      return oldState;
  }
};

export default projectsReducer;