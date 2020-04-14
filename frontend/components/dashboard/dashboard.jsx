import React from 'react';
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { logout } = this.props;

    return (
      <>
        <header className="dashboard-header">
          <nav className="project-nav header-toggle-dropdown">
            <Link to="/">
              <img src={window.logoWhiteURL} alt="Logo" className="logo" />
            </Link>
            <div className="arrow-down"></div>
          </nav>
          <div className="user-nav">
            <div className="notifications header-toggle-dropdown">
              <i className="fas fa-bell"></i>
            </div>
            <div className="header-toggle-dropdown">
              WHAT'S NEW <div className="arrow-down"></div>
            </div>
            <div className="header-toggle-dropdown">
              HELP <div className="arrow-down"></div>
            </div>
            <nav className="user-profile header-toggle-dropdown">
              {this.props.currentUser.username} <div className="arrow-down"></div>
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
              <button className="dashboard-action-tabs-btn btn btn-green">
                Create project
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
                  <i class="fas fa-bars"></i> <span>My Projects |</span>
                  <span className="project-count">1</span>
                </h1>
                <ul className="project-list">
                  <li>
                    <section className="project-container">
                      Demo Project
                    </section>
                  </li>
                </ul>
              </section>
              <button className="btn btn-blue" onClick={logout} > Log Out </button>
            </section>
          </div>

        </section>
      </>
    );
  }
}

export default Dashboard;