export const createProject = (project) => (
  $.ajax({
    url: "/api/projects",
    method: "POST",
    data: { project }
  })
);

export const fetchProject = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/projects/${id}`
  })
);