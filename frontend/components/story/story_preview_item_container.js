import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/user_actions";
import { selectAllUsers } from "../../reducers/selectors";
import StoryPreviewItem from "./story_preview_item";

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    users: users
  };
};

export default connect(mapStateToProps)(StoryPreviewItem);