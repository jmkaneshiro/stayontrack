import React from "react";
import { connect } from "react-redux";
import { createProject } from "../../actions/project_actions";
import ProjectForm from "./project_form";

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);