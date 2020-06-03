import React from "react";
import { connect } from "react-redux";
import { createStory } from "../../actions/story_actions";
import StoryPreviewForm from "./story_preview_form";

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    users: users
  };
};

const mapDispatchToProps = dispatch => ({
  createStory: (projectId, story) => dispatch(createStory(projectId,story))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryPreviewForm);