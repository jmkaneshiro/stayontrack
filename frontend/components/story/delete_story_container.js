import React from "react";
import { connect } from "react-redux";
import { deleteStory } from "../../actions/story_actions";
import { closeModal } from "../../actions/modal_actions";
import DeleteStory from "./delete_story";

const mapStateToProps = ({ entities: { focused_item } }) => {
  return {
    story: focused_item.story
  };
};

const mapDispatchToProps = dispatch => ({
  deleteStory: (story) => dispatch(deleteStory(story)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteStory);