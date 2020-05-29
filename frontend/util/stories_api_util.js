export const fetchStories = data => {
  return $.ajax({
    method: 'GET',
    url: 'api/stories',
    data
  });
};