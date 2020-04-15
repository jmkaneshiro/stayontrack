import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_PROJECT } from "../actions/project_actions";

const usersReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_PROJECT:
      let projectOwner = oldState[action.project.project_owner_id];
      let projectsOwned = projectOwner.projects_owned;
      let updatedUserSlice = Object.assign({}, projectOwner, { "projects_owned": [...projectsOwned, action.project.id] });

      return Object.assign({}, oldState, { [action.project.project_owner_id]: updatedUserSlice });
    default:
      return oldState;
  }
};

export default usersReducer;