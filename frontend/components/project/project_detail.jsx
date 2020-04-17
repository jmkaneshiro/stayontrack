import React from 'react';
import TopNavigation from "../navigation/top_navigation";

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  }

  

  render() {
    const { currentUser, logout, projectsDropdownLabel } = this.props;

    return (
      <>
        <TopNavigation 
          currentUser={currentUser} 
          logout={logout} 
          projectsDropdownLabel={projectsDropdownLabel}
        />
        <section className="project-detail-container">
          <nav className="project-detail-sidebar">
            <ul className="project-detail-sidebar-options">
              <li><i className="fas fa-inbox"></i><span>My Work</span></li>
              <li><i className="fas fa-layer-group"></i><span>Current/backlog</span></li>
              <li><i className="far fa-snowflake"></i><span>Icebox</span></li>
              <li><i className="fas fa-check"></i><span>Done</span></li>
              <li><i className="fas fa-exclamation-triangle"></i><span>Blocked</span></li>
              <li><i className="fas fa-shield-alt"></i><span>Epics</span></li>
              <li><i className="fas fa-tag"></i><span>Labels</span></li>
              <li><i className="fas fa-history"></i><span>Project History</span></li>
            </ul>
          </nav>
          <section className="project-detail-panels">
            <section className="project-detail-bucket current-iteration-backlog">
              <header>
                <h1>Current Iteration/Backlog</h1>
                <div className="project-detail-actions">
                  <span><i className="fas fa-plus"></i> Add Story</span>
                  <span><i className="fas fa-ellipsis-v"></i></span>
                  <span><i className="fas fa-times"></i></span>
                </div>
              </header>
              <section className="stories-stack">
                <img src={window.currentBacklogEmptyURL} alt="Prioritized ideas" />
                <div className="empty-message-text">
                  <p>Stories you are currently working on, and stories you've prioritized
                  to work on next live here.
                  </p>
                </div>
              </section>
            </section>
            <section className="project-detail-bucket icebox">
              <header>
                <h1>Icebox</h1>
                <div className="project-detail-actions">
                  <span><i class="fas fa-plus"></i> Add Story</span>
                  <span><i class="fas fa-ellipsis-v"></i></span>
                  <span><i class="fas fa-times"></i></span>
                </div>
              </header>
              <section className="stories-stack">
                <img src={window.iceboxEmptyURL} alt="Loose ideas" />
                <div className="empty-message-text">
                  <p>Loose ideas and stories that haven't been prioritized go here.</p>
                </div>
              </section>
            </section>
          </section>
        </section>
      </>
    );
  }
}

export default ProjectDetail;