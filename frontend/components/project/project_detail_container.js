import React from "react";
import { connect } from "react-redux";
import ProjectDetail from "./project_detail";
import { fetchProject } from "../../actions/project_actions";
import { logout } from "../../actions/session_actions";

const mapStateToProps = ({ session, entities: { users, projects } }, ownProps) => {
  const project = projects[ownProps.match.params.id];

  return {
    currentUser: users[session.id],
    project: project,
    projectsDropdownLabel:
      <label htmlFor="project-nav-toggle" className="toggle-dropdown-label">
        <div>
          <img src={window.logoWhiteSmallURL} alt="Logo" className="logo-small" />
          <span className="project-nav-toggle-title">{project.title}</span>
          <span className="arrow-down"></span>
        </div>
      </label>
  }
};

const mapDispatchToProps = dispatch => ({
  fetchProject: (id) => dispatch(fetchProject(id)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);