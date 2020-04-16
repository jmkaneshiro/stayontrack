import React from "react";
import ProjectDetail from "./project_detail";
import { connect } from "react-redux";
import { fetchProject } from "../../actions/project_actions";

const mapStateToProps = ({ session, entities: { users, projects } }, ownProps) => ({
  currentUser: users[session.id],
  project: projects[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
  fetchProject: (id) => dispatch(fetchProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);