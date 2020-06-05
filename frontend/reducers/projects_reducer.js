import { RECEIVE_PROJECT, RECEIVE_PROJECTS } from "../actions/project_actions";

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
    default:
      return oldState;
  }
};

export default projectsReducer;