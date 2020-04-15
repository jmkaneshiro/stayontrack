import React from "react";
import { connect } from "react-redux";
import { createProject } from "../../actions/project_actions";
import { closeModal } from "../../actions/modal_actions"
import ProjectForm from "./project_form";

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);