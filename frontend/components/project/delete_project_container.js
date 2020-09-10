import React from "react";
import { connect } from "react-redux";
import { deleteProject } from "../../actions/project_actions";
import { closeModal } from "../../actions/modal_actions";
import DeleteProject from "./delete_project";

const mapStateToProps = ({ entities: { focused_item } }) => {
  return {
    project: focused_item.project
  };
};

const mapDispatchToProps = dispatch => ({
  deleteProject: (project) => dispatch(deleteProject(project)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProject);