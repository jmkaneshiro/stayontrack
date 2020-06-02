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

// export const createProject = project => dispatch => (
//   ProjectApiUtil.createProject(project)
//     // ProjectApiUtil.createProjectMembership({ project_id: project.id, member_id: project.project_owner_id });
//     .then(project => {
//       dispatch(receiveProject(project));
//       return project;
//     })
// );

// export const createProjectMembership = projectMembership => dispatch => (
//   ProjectApiUtil.createProjectMembership(projectMembership)
//     .then(project => {
//       dispatch(receiveProject(project));
//       return project;
//     })
// );