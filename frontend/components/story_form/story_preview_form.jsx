import React from 'react';

class StoryPreviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      project_id: this.props.project.id,
      story_owner_id: this.props.currentUser.id,
      story_assignee_id: null,
      story_state: "unassigned",
      story_type: "feature"
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const story = Object.assign({}, this.state);
    const projectId = story.project_id;

    this.props.createStory(projectId, story).then(()=> {
      this.setState({
        name: "",
        description: "",
        project_id: this.props.project.id,
        story_owner_id: this.props.currentUser.id,
        story_assignee_id: null,
        story_state: "unassigned",
        story_type: "feature"
      });
    });
  }

  render() {
    const { currentUser } = this.props;
    const { name, description, story_assignee_id,
      story_state, story_type
    } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit} className="story-preview-edit-form">
          <div className="story-text-field story-text-field-wrapper">
            <input type="text"
              placeholder="Add a name for your new story"
              className="story-name"
              value={name}
              onChange={this.update("name")}
            />
          </div>
          <div className="story-info-box-wrapper">
            <div className="story-info-box">
              <div className="story-info-box-row">
                {story_type === "feature" && (<i className="fas fa-star"></i>)}
                {story_type === "bug" && (<i className="fas fa-bug"></i>)}
                {story_type === "chore" && (<i className="fas fa-cog"></i>)}
                <label htmlFor="story-type">STORY TYPE</label>
                <select 
                  name="story-type" 
                  value={story_type}
                  onChange={this.update("story_type")}
                  >
                  <option value="feature">Feature</option>
                  <option value="bug">Bug</option>
                  <option value="chore">Chore</option>
                </select>
              </div>
              <div className="story-info-box-row">
                <label htmlFor="requester">REQUESTER</label>
                <div name="requester" className="requester">{currentUser.name}</div>
              </div>
            </div>
            <div id="story-state-box">  
              <label htmlFor="story-state">STORY STATE</label>
              <select name="story-state" 
                value={story_state}
                onChange={this.update("story_state")}
                >
                <option value="unassigned">Unassigned</option>
                <option value="started">Started</option>
                <option value="finished">Finished</option>
                <option value="rejected">Rejected</option>
                <option value="rejected">Accepted</option>
              </select>
            </div>
          </div>
          <div className="story-text-field story-text-field-wrapper">
            <label htmlFor="description">DESCRIPTION</label>
            <textarea
              cols="30"
              rows="3"
              placeholder="Add a description"
              value={description}
              onChange={this.update("description")}              
            ></textarea>
          </div>
          <input
            type="submit"
            className="dashboard-action-tabs-btn btn btn-green"
            value="Submit"
          />
        </form>
      </>
    )
  }
}
export default StoryPreviewForm;