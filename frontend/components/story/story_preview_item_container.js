import React from "react";
import { connect } from "react-redux";
import StoryPreviewItem from "./story_preview_item";

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    users: users
  };
};

export default connect(mapStateToProps)(StoryPreviewItem);