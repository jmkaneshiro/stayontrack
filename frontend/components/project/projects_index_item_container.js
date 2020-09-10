import React from "react";
import { connect } from "react-redux";
import ProjectsIndexItem from "./projects_index_item";
import { fetchProject } from "../../actions/project_actions"; 
import { openModal } from '../../actions/modal_actions';

const mapDispatchToProps = (dispatch, { project }) => ({
  openModal: modal => dispatch(openModal(modal)),
  fetchProject: () => dispatch(fetchProject(project.id))
});

export default connect(null, mapDispatchToProps)(ProjectsIndexItem);