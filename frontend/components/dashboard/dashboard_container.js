import React from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../actions/project_actions';
import { selectAllProjects } from '../../reducers/selectors';
import { openModal, closeModal } from '../../actions/modal_actions';
import Dashboard from './dashboard';

const mapStateToProps = ({ entities: { projects } }) => {
  return {
    projects: selectAllProjects(projects),
    projectsDropdownLabel: (
      <img src={window.logoWhiteURL} alt="Logo" className="logo" />
    ),
  };
};

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  fetchProjects: () => dispatch(fetchProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
