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

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
//   fetchProject: (id) => dispatch(fetchProject(id)),
//   fetchStories: (projectId) => dispatch(fetchStories(projectId)),
//   logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryPreviewItem);