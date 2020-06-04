import React from "react";
import { connect } from "react-redux";
import StoryPreviewItem from "./story_preview_item";
import { updateStory, fetchStory, fetchStories } from "../../actions/story_actions";

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    users: users
  };
};

const mapDispatchToProps = dispatch => ({
  updateStory: (story) => dispatch(updateStory(story)),
  fetchStories: (projectId) => dispatch(fetchStories(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryPreviewItem);