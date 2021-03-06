export const fetchProjects = data => (
  $.ajax({
    method: 'GET',
    url: 'api/projects',
    data
  })
);

export const fetchProject = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/projects/${id}`
  })
);

export const createProject = (project) => (
  $.ajax({
    url: "/api/projects",
    method: "POST",
    data: { project }
  })
);

export const deleteProject = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/projects/${id}`
  })
);

export const createProjectMembership = (project_membership) => (
  $.ajax({
    url: "/api/project_memberships",
    method: "POST",
    data: { project_membership }
  })
);