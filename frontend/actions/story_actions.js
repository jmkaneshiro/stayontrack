import * as StoryApiUtil from "../util/stories_api_util";

export const RECEIVE_STORIES = "RECEIVE_STORIES";
export const RECEIVE_STORY = "RECEIVE_STORY";
export const REMOVE_STORY = "REMOVE_STORY";

const receiveStories = (stories) => ({
  type: RECEIVE_STORIES,
  stories
});

const receiveStory = (story) => ({
  type: RECEIVE_STORY,
  story
});

const removeStory = (story) => ({
  type: REMOVE_STORY,
  story
});

export const fetchStories = (projectId) => dispatch => StoryApiUtil.fetchStories(projectId)
  .then(stories => dispatch(receiveStories(stories)));

export const fetchStory = (story) => dispatch => (
  StoryApiUtil.fetchStory(story).then(story => {
    dispatch(receiveStory(story));
    return story;
  })
);

export const createStory = (story) => dispatch => (
    StoryApiUtil.createStory(story)
    .then(story => {
      dispatch(receiveStory(story));
      return story;
    })
);

export const updateStory = (story) => dispatch => (
  StoryApiUtil.updateStory(story)
    .then(story => {
      dispatch(receiveStory(story));
      return story;
    })
);

// export const deleteStory = (story) => dispatch => (
//   StoryApiUtil.destroyStory(story)
//     .then(story => dispatch(removeStory(story)))
// );

export const deleteStory = (story) => dispatch => {
  return (
    StoryApiUtil.destroyStory(story)
      .then(story => {
        dispatch(removeStory(story));
      })
  )
};