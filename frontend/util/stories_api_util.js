export const fetchStories = (project_id) => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/${project_id}/stories`
  });
};

export const fetchStory = (story) => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/${story.project_id}/stories/${story.id}`
  });
};

export const createStory = (story) => {
  return $.ajax({
    url: `api/projects/${story.project_id}/stories`,
    method: "POST",
    data: { story }
  });
};

export const updateStory = (story) => {
  return $.ajax({
    url: `api/projects/${story.project_id}/stories/${story.id}`,
    method: "PATCH",
    data: { story }
  });
};