import React from 'react';
import TopNavigation from "../navigation/top_navigation";
import StoryIndexItem from "../story/stories_index_item";
import StoryPreviewItemContainer from "../story/story_preview_item_container";
import StoryPreviewFormContainer from "../story_form/story_preview_form_container";

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state=({
      storyFormOpen: false
    });

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchProject(this.props.match.params.id).then(project => {
        this.props.fetchStories(project.id);
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchProject(this.props.match.params.id).then(project => {
        this.props.fetchStories(project.id);
      });
    }
  }

  handleClickOpen(e) {
    e.preventDefault();
    this.setState({
      storyFormOpen: true
    });
  }

  handleClickClose(e) {
    e.preventDefault();
    this.setState({
      storyFormOpen: false
    });
  }

  render() {
    const { project, stories } = this.props;
    const { storyFormOpen } = this.state;

    return (
      <>
        {project && <TopNavigation project={project}/>}
        <section className="project-detail-container">
          <nav className="project-detail-sidebar">
            <ul className="project-detail-sidebar-options">
              {/* <li><i className="fas fa-inbox"></i><span>My Work</span></li> */}
              <li><i className="fas fa-layer-group"></i><span>Current/backlog</span></li>
              {/* <li><i className="far fa-snowflake"></i><span>Icebox</span></li>
              <li><i className="fas fa-check"></i><span>Done</span></li>
              <li><i className="fas fa-exclamation-triangle"></i><span>Blocked</span></li>
              <li><i className="fas fa-shield-alt"></i><span>Epics</span></li>
              <li><i className="fas fa-tag"></i><span>Labels</span></li>
              <li><i className="fas fa-history"></i><span>Project History</span></li> */}
            </ul>
          </nav>
          <section className="project-detail-panels">
            <section className="project-detail-bucket current-iteration-backlog">
              <header>
                <h1>Current Iteration/Backlog</h1>
                <div className="project-detail-actions">
                  <button className="story-action-btn btn btn-orange-hover" onClick={this.handleClickOpen }><i className="fas fa-plus"></i> Add Story</button>
                  {/* <span><i className="fas fa-ellipsis-v"></i></span>
                  <span><i className="fas fa-times"></i></span> */}
                </div>
              </header>
              <section className="stories-stack-wrapper">
                <section className="stories-stack">
                  {storyFormOpen && project && <StoryPreviewFormContainer project={project} handleClickClose={this.handleClickClose} />}
                  { stories.length > 0
                    ? <ul className="stories-list">
                      {stories.map(
                        story => (<StoryPreviewItemContainer key={`project-id_${story.project_id}_story-id_${story.id}`} story={story} />
                        ))}
                    </ul>
                    : !storyFormOpen && <>
                        <img src={window.currentBacklogEmptyURL} alt="Prioritized ideas" />
                        <div className="empty-message-text">
                          <p>Stories you are currently working on, and stories you've prioritized
                          to work on next live here.
                          </p>
                        </div>
                      </>
                  }
                </section>
              </section>
            </section>
            {/* <section className="project-detail-bucket icebox">
              <header>
                <h1>Icebox</h1>
                <div className="project-detail-actions"> <span><i className="fas fa-plus"></i> Add Story</span>
                  <span><i className="fas fa-ellipsis-v"></i></span>
                  <span><i className="fas fa-times"></i></span>
                </div>
              </header>
              <section className="stories-stack">
                <img src={window.iceboxEmptyURL} alt="Loose ideas" />
                <div className="empty-message-text">
                  <p>Loose ideas and stories that haven't been prioritized go here.</p>
                </div>
              </section>
            </section> */}
          </section>
        </section>
      </>
    );
  }
}

export default ProjectDetail;