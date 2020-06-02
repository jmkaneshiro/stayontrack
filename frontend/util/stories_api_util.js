export const fetchStories = (project_id) => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/${project_id}/stories`
  });
};

export const fetchStory = (project_id, story_id) => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/${project_id}/stories/${story_id}`
  });
};

export const createStory = (project_id, story) => {
  return $.ajax({
    url: `api/projects/${project_id}/stories`,
    method: "POST",
    data: { story }
  });
};
