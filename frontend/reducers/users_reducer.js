import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_PROJECT } from "../actions/project_actions";

const usersReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_PROJECT:
      let projectOwner = [action.project.project_owner_id];
      let projectsOwned = projectOwner.projects_owned;
      return Object.assign({}, oldState, { projectOwner: { "projects_owned": projectsOwned }});
    default:
      return oldState;
  }
};

export default usersReducer;