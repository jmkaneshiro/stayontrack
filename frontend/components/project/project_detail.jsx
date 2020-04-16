import React from 'react';
import { ProtectedRoute } from '../../util/route_util';
import TopNavigation from "../navigation/top_navigation";

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  }

  render() {
    const { currentUser, project, logout, projectsDropdownLabel } = this.props;
    return (
      <>
        <TopNavigation 
          currentUser={currentUser} 
          logout={logout} 
          projectsDropdownLabel={projectsDropdownLabel}
        />
        <h1>{project.title}</h1>
        <p>Let's get started!</p>
      </>
    );
  }
}

export default ProjectDetail;