export const createProject = (title) => (
  $.ajax({
    url: "/api/projects",
    method: "POST",
    data: { title }
  })
);

export const fetchProject = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/projects/${id}`
  })
);