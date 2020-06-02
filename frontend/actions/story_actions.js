import * as StoryApiUtil from "../util/stories_api_util";

export const RECEIVE_STORIES = "RECEIVE_STORIES";
export const RECEIVE_STORY = "RECEIVE_STORY";

const receiveStories = (stories) => ({
  type: RECEIVE_STORIES,
  stories
});

const receiveStory = (story) => ({
  type: RECEIVE_STORY,
  story
});

export const fetchStories = (projectId) => dispatch => StoryApiUtil.fetchStories(projectId)
  .then(stories => dispatch(receiveStories(stories)));

export const fetchStory = (projectId, storyId) => dispatch => (
  StoryApiUtil.fetchStory(projectId, storyId).then(story => {
    dispatch(receiveStory(story));
    return story;
  })
);

export const createStory = (projectId, story) => dispatch => (
    StoryApiUtil.createStory(projectId, story)
    .then(story => {
      dispatch(receiveStory(story));
      return story;
    })
);