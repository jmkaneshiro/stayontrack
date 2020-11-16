import React from 'react';
import TopNavigation from '../navigation/top_navigation';
import ProjectsIndexItemContainer from '../project/projects_index_item_container';

class Dashboard extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.fetchProjects();
  }

  render() {
    const { projects, projectsDropdownLabel, openModal } = this.props;
    return (
      <>
        <TopNavigation projectsDropdownLabel={projectsDropdownLabel}/>
        <section className="dashboard">
          <div className="dashboard-tabs-container">
            <div className="dashboard-tabs-wrapper">
              <div className="dashboard-tabs">
                <div className="dashboard-tab active-tab">Projects</div>
                {/* <div className="dashboard-tab inactive-tab">Workspaces</div> */}
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
                {/* <div className="projects-searchbar">
                  <i className="fas fa-search"></i>
                  <input placeholder="Search Active Projects" className="searchbar-input"></input>
                </div>
                <div className="projects-quick-dropdown">
                  <span>Active Projects</span>
                  <i className="fas fa-chevron-down"></i>
                </div> */}
              </section>
              <section className="my-projects">
                <h1>
                  <i className="fas fa-bars"></i> <span>My Projects | </span>
                  <span className="project-count">{projects.length || ""}</span>
                </h1>
                <ul className="project-list">
                  {projects && projects.map((project) => {
                    <ProjectsIndexItemContainer key={project.id} project={project} /> 
                  })}
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