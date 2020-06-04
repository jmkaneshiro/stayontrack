import React from "react";
import { connect } from "react-redux";
import StoryPreviewItem from "./story_preview_item";
import { updateStory, deleteStory, fetchStory } from "../../actions/story_actions";
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    users: users
  };
};

const mapDispatchToProps = (dispatch, { story }) => ({
  openModal: modal => dispatch(openModal(modal)),
  updateStory: (updatedStory) => dispatch(updateStory(updatedStory)),
  deleteStory: () => dispatch(deleteStory(story)),
  fetchStory: () => dispatch(fetchStory(story))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryPreviewItem);