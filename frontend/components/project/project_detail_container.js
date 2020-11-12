import React from 'react';
import { connect } from 'react-redux';
import ProjectDetail from './project_detail';
import { fetchProject } from '../../actions/project_actions';
import { fetchUsers } from '../../actions/user_actions';
import { selectAllUsers } from '../../reducers/selectors';
import { fetchStories } from '../../actions/story_actions';
import { selectAllStories } from '../../reducers/selectors';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (
  { session, entities: { users, projects, stories } },
  ownProps
) => {
  const project = projects[ownProps.match.params.id];
  return {
    currentUser: users[session.id],
    users: users,
    project: project,
    stories: selectAllStories(stories),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProject: (id) => dispatch(fetchProject(id)),
  fetchStories: (projectId) => dispatch(fetchStories(projectId)),
  fetchUsers: () => dispatch(fetchUsers()),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
