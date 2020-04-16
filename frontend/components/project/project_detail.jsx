import React from 'react';
import { ProtectedRoute } from '../../util/route_util';

class ProjectDetail extends React.Component {
  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  }

  render() {
    const { currentUser, project } = this.props;

    return (
      <>
        <header className="dashboard-header">
          <nav className="project-nav toggle-dropdown">
            <input type="checkbox" id="project-nav-toggle" />
            <label htmlFor="project-nav-toggle" className="toggle-dropdown-label">
              <div>
                <img src={window.logoWhiteURL} alt="Logo" className="logo" />
                <span className="arrow-down"></span>
              </div>
            </label>
          </nav>
          <div className="user-nav">
            <div className="toggle-dropdown">
              <input type="checkbox" id="notifications-toggle" />
              <label htmlFor="notifications-toggle" className="toggle-dropdown-label">
                <i className="fas fa-bell"></i>
              </label>
            </div>
            <div className="toggle-dropdown">
              <input type="checkbox" id="stayontrack-updates-toggle" />
              <label htmlFor="stayontrack-updates-toggle" className="toggle-dropdown-label">
                <div>What's New<span className="arrow-down"></span></div>
              </label>
            </div>
            <div className="toggle-dropdown">
              <input type="checkbox" id="help-toggle" />
              <label htmlFor="help-toggle" className="toggle-dropdown-label">
                <div>Help<span className="arrow-down"></span></div>
              </label>
            </div>
            <nav className="toggle-dropdown">
              <input type="checkbox" id="user-profile-toggle" />
              <label htmlFor="user-profile-toggle" className="toggle-dropdown-label">
                <div>{currentUser.username}<span className="arrow-down"></span></div>
              </label>
              <ul>
                <li onClick={logout}>Log Out</li>
              </ul>
            </nav>
          </div>
        </header>
        <h1>{project.title}</h1>
        <p>Let's get started!</p>
      </>
    );
  }
}

export default ProjectDetail;