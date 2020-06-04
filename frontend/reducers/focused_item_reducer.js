import {
  RECEIVE_STORY
} from '../actions/story_actions';

const _nullStory = Object.freeze({
  id: null
});

const focusedItemReducer = (oldState = _nullStory, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_STORY:
      return { story: action.story };
    default:
      return oldState;
  }
};

export default focusedItemReducer;