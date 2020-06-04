import React from "react";
import { connect } from "react-redux";
import StoryPreviewItem from "./story_preview_item";
import { updateStory, deleteStory } from "../../actions/story_actions";

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    users: users
  };
};

const mapDispatchToProps = (dispatch, { story }) => ({
  updateStory: (updatedStory) => dispatch(updateStory(updatedStory)),
  deleteStory: () => dispatch(deleteStory(story))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryPreviewItem);