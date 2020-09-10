import * as ProjectApiUtil from "../util/projects_api_util";

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";

const receiveProjects = (projects) => ({
  type: RECEIVE_PROJECTS,
  projects
});

const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});

const removeProject = (project) => ({
  type: REMOVE_PROJECT,
  project
})

export const fetchProjects = () => dispatch => ProjectApiUtil.fetchProjects()
  .then(projects => dispatch(receiveProjects(projects)));

export const fetchProject = id => dispatch => (
  ProjectApiUtil.fetchProject(id).then(project => {
    dispatch(receiveProject(project));
    return project;
  })
);

export const createProject = project => dispatch => (
  ProjectApiUtil.createProject(project)
    .then(project => {
      dispatch(
        createProjectMembership(
        { project_id: project.id, member_id: project.project_owner_id }
      )); 
      return project;
    })
);

export const deleteProject = id => dispatch => {
  return (
    ProjectApiUtil.deleteProject(id)
      .then(project => {
        dispatch(removeProject(project));
      })
  )
}; 

export const createProjectMembership = projectMembership => dispatch => {
  return (
    ProjectApiUtil.createProjectMembership(projectMembership)
      .then(project => {
        dispatch(receiveProject(project));
        return project;
      })
  );
};