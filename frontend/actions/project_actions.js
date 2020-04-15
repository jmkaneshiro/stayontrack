import * as ProjectApiUtil from "../util/projects_api_util";

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";

const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});

export const createProject = (project) => dispatch => ProjectApiUtil.createProject(project)
  .then(project => dispatch(receiveProject(project)));