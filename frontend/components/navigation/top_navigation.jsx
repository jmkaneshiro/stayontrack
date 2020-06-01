import React from 'react';
import { Link } from "react-router-dom";

class TopNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, logout, projectsDropdownLabel, project } = this.props;

    return (
      <>
        <header className="dashboard-header">
          <nav className="toggle-dropdown project-nav">
            <input type="checkbox" id="project-nav-toggle" />
            { projectsDropdownLabel || 
              <label htmlFor="project-nav-toggle" className="toggle-dropdown-label">
                <div>
                  <img src={window.logoWhiteSmallURL} alt="Logo" className="logo-small" />
                  <span className="project-nav-toggle-title">{project.title}</span>
                  <span className="arrow-down"></span>
                </div>
              </label>
            }
            <ul>
              <li><Link to="/dashboard"><i className="fas fa-home"></i><span>Dashboard</span></Link></li>
            </ul>
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
            <nav className="toggle-dropdown user-profile-dropdown">
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
      </>
    );
  }
}

export default TopNavigation;