import React from "react";
import { connect } from "react-redux";
import ProjectDetail from "./project_detail";
import { fetchProject } from "../../actions/project_actions";
import { fetchStories } from "../../actions/story_actions";
import { logout } from "../../actions/session_actions";

const mapStateToProps = ({ session, entities: { users, projects } }, ownProps) => {
  const project = projects[ownProps.match.params.id];
  return {
    currentUser: users[session.id],
    project: project
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProject: (id) => dispatch(fetchProject(id)),
  fetchStories: (projectId) => dispatch(fetchStories(projectId)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);