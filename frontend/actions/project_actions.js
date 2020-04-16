import * as ProjectApiUtil from "../util/projects_api_util";

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";

const receiveProjects = (projects) => ({
  type: RECEIVE_PROJECTS,
  projects
});

const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});

export const fetchProjects = () => dispatch => ProjectApiUtil.fetchProjects()
  .then(projects => dispatch(receiveProjects(projects)));

export const fetchProject = id => dispatch => ProjectApiUtil.fetchProject(id)
  .then(project => dispatch(receiveProject(project)));

export const createProject = (project) => dispatch => ProjectApiUtil.createProject(project)
  .then(project => dispatch(receiveProject(project)));