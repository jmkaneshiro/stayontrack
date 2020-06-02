import React from "react";
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchProjects } from "../../actions/project_actions";
import { fetchUsers } from "../../actions/user_actions";
import { selectAllUsers } from "../../reducers/selectors";
import { selectAllProjects } from "../../reducers/selectors";
import { openModal, closeModal } from '../../actions/modal_actions';
import Dashboard from './dashboard';


const mapStateToProps = ({ session, entities: { users, projects } }) => {
  return {
    currentUser: users[session.id],
    users: selectAllUsers(users),
    projects: selectAllProjects(projects),
    projectsDropdownLabel: 
      <label htmlFor="project-nav-toggle" className="toggle-dropdown-label">
        <div>
          <img src={window.logoWhiteURL} alt="Logo" className="logo" />
          <span className="arrow-down"></span>
        </div>
      </label>
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  fetchProjects: () => dispatch(fetchProjects()),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);