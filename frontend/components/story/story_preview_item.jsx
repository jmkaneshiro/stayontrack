import React from 'react';

class StoryPreviewItem extends React.Component {
  constructor(props) {
    super(props);

    const { id, name, story_type, story_owner_id, project_id, story_state, story_assignee_id, description,
      created_at, updated_at } = this.props.story;

    this.state= {
      id: id,
      name: name,
      story_type: story_type,
      story_owner_id: story_owner_id,
      project_id: project_id,
      story_state: story_state,
      story_assignee_id: story_assignee_id,
      description: description,
      created_at: created_at,
      updated_at: updated_at,
      isOpen: false
    };

    this.handleClickClose = this.handleClickClose.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteModal = this.handleDeleteModal.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { id, name, story_type, story_owner_id, project_id, story_state, story_assignee_id, description, 
         created_at, updated_at } = this.state;

    const updatedStory = Object.assign({}, 
      { id: id }, 
      { name: name }, 
      { story_type: story_type },
      { story_owner_id: story_owner_id },
      { project_id: project_id },
      { story_state: story_state },
      { story_assignee_id: story_assignee_id },
      { description: description },
      { created_at: created_at },
      {updated_at: updated_at}
    );
  
    if (JSON.stringify(this.props.story) !== JSON.stringify(updatedStory)) {
      this.props.updateStory(updatedStory);
    }
  }

  handleClickClose(e) {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleDeleteModal(e) {
    e.preventDefault();
    this.props.fetchStory().then(()=> {
      this.props.openModal('delete story');
    });
  }

  storyTypeIcon(story_type) {
    switch (story_type) {
      case "feature":
        return <i className="fas fa-star"></i>;
      case "bug":
        return <i className="fas fa-bug"></i>;
      case "chore":
        return <i className="fas fa-cog"></i>;
      default:
        return;
    };
  }

  render() {
    const { users, story, openModal } = this.props;
    const { name, description, story_assignee_id,
      story_state, story_type, isOpen
    } = this.state;

    return (
      <>
        {isOpen ?
          <form onSubmit={this.handleSubmit} className="story-preview-edit-form">
          <div className="story-text-field story-text-field-wrapper">
            <input type="text"
              placeholder="Update name of story"
              defaultValue={name || ''}
              onChange={this.update("name")}
              className="story-name"
            />
          </div>
          <div className="story-info-box-wrapper">
            <div className="story-info-box">
              <div className="story-info-box-row">
                {this.storyTypeIcon(story_type)}
                <label htmlFor="story-type">STORY TYPE</label>
                <select name="story-type" 
                  defaultValue={story_type || ''}
                  onChange={this.update("story_type")}
                >
                  <option value="feature">Feature</option>
                  <option value="bug">Bug</option>
                  <option value="chore">Chore</option>
                </select>
              </div>
              <div className="story-info-box-row">
                <label htmlFor="requester">REQUESTER</label>
                <div name="requester" className="requester">{users[story.story_owner_id].name}</div>
              </div>
            </div>
            <div id="story-state-box">
              <label htmlFor="story-state">STORY STATE</label>
              <select 
                name="story-state" 
                defaultValue={story_state || ''}
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
              defaultValue={description || ''}
              onChange={this.update("description")}
            ></textarea>
          </div>
          <section className="story-form-actions">
              <div>
                <button className="story-action-btn btn btn-gray" onClick={this.handleClickClose}>Close</button>
                <input
                  type="submit"
                  className="story-action-btn btn btn-green"
                  value="Save Changes"
                />
              </div>
              <div>
                <button className="story-action-btn btn btn-gray" onClick={this.handleDeleteModal}><i className="far fa-trash-alt"></i></button>
              </div>
          </section>
          </form> :
          <button className="story-preview-closed" onClick={this.handleClickClose}>
            <div>
              <div>{this.storyTypeIcon(story_type)}</div>
              <div>{name}</div>
            </div>
            <div>State: {story_state[0].toUpperCase() + story_state.slice(1)}</div>
          </button>
        }
      </>
    )
  }
}
export default StoryPreviewItem;