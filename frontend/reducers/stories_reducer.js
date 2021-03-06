import { RECEIVE_STORY, RECEIVE_STORIES, REMOVE_STORY } from "../actions/story_actions";

const storiesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = {};
  switch (action.type) {
    case RECEIVE_STORIES:
      action.stories.forEach( story => {
        nextState[story.id] = story;
      });
      return nextState;
      // return Object.assign({}, oldState, action.stories);
      // return action.stories;
    case RECEIVE_STORY:
      return Object.assign({}, oldState, { [action.story.id]: action.story });
    case REMOVE_STORY:
      nextState = Object.assign({}, oldState);
      delete nextState[action.story.id];
      return nextState;
    default:
      return oldState;
  }
};

export default storiesReducer;