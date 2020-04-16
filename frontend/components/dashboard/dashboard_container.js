import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchProject, fetchProjects } from "../../actions/project_actions";
import { selectAllProjects } from "../../reducers/selectors";
import { openModal, closeModal } from '../../actions/modal_actions';
import Dashboard from './dashboard';


const mapStateToProps = ({ session, entities: { users, projects } }) => {
  return {
    currentUser: users[session.id],
    projects: selectAllProjects(projects)
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);