import { RECEIVE_STORY, RECEIVE_STORIES } from "../actions/story_actions";

const storiesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_STORIES:
      return Object.assign({}, oldState, action.stories);
    case RECEIVE_STORY:
      return Object.assign({}, oldState, { [action.story.id]: action.story });
    default:
      return oldState;
  }
};

export default storiesReducer;