import { RECEIVE_PROJECT, RECEIVE_PROJECTS, REMOVE_PROJECT } from "../actions/project_actions";

const projectsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = {};
  switch(action.type) {
    case RECEIVE_PROJECTS:
      const projectsArray = Object.values(action.projects);
      projectsArray.forEach( project => {
        nextState[project.id] = project;
      });
      return nextState; 
    case RECEIVE_PROJECT:
      return Object.assign({}, oldState, { [action.project.id]: action.project });
    case REMOVE_PROJECT:
      nextState = Object.assign({}, oldState);
      delete nextState[action.project.id];
      return nextState;
    default:
      return oldState;
  }
};

export default projectsReducer;