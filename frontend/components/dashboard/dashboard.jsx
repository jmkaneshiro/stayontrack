import React from 'react';
import { Link } from "react-router-dom";
import ProjectsIndexItem from "../project/projects_index_item";

class Dashboard extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const { projects, currentUser, logout, openModal } = this.props;

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
        <section className="dashboard">
          <div className="dashboard-tabs-container">
            <div className="dashboard-tabs-wrapper">
              <div className="dashboard-tabs">
                <div className="dashboard-tab active-tab">Projects</div>
                <div className="dashboard-tab inactive-tab">Workspaces</div>
              </div>
              <button 
                className="dashboard-action-tabs-btn btn btn-green"
                onClick={() => openModal('create project')}
              >
                Create Project
              </button>
            </div>
          </div>
          <div className="projects-pane-container">
            <section className="projects-pane">
              <section className="projects-top-menu">
                <div className="projects-searchbar">
                  <i className="fas fa-search"></i>
                  <input placeholder="Search Active Projects" className="searchbar-input"></input>
                </div>
                <div className="projects-quick-dropdown">
                  <span>Active Projects</span>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </section>
              <section className="my-projects">
                <h1>
                  <i className="fas fa-bars"></i> <span>My Projects |</span>
                  <span className="project-count">1</span>
                </h1>
                <ul className="project-list">
                  {projects.map(project => <ProjectsIndexItem key={project.id} project={project} />)}
                </ul>
              </section>
            </section>
          </div>
        </section>
      </>
    );
  }
}

export default Dashboard;