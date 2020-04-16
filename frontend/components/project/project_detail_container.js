import React from "react";
import ProjectDetail from "./project_detail";
import { connect } from "react-redux";
import { fetchProject } from "../../actions/project_actions";

const mapStateToProps = (state, ownProps) => ({
  // const project = state.entities.projects[ownProps.match.params.id];
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);