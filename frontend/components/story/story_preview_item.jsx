import React from 'react';

class StoryPreviewItem extends React.Component {
  constructor(props) {
    super(props);

    const { name, description, story_assignee_id, 
      story_owner_id, story_state, story_type
    } = this.props.story;

    this.state= {
      name: name,
      description: description,
      story_assignee_id: story_assignee_id,
      story_state: story_state,
      story_type: story_type,
      isOpen: false
    };

    this.handleClickPreview = this.handleClickPreview.bind(this);
  }

  handleClickPreview(e) {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
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
    const { users, story } = this.props;
    const { name, description, story_assignee_id,
      story_state, story_type, isOpen
    } = this.state;

    return (
      <>
        {isOpen ?
        <form className="story-preview-edit-form">
          <div className="story-text-field story-text-field-wrapper">
            <input type="text"
              placeholder="Update name of story"
              defaultValue={name || ''}
              className="story-name"
            />
          </div>
          <div className="story-info-box-wrapper">
            <div className="story-info-box">
              <div className="story-info-box-row">
                {this.storyTypeIcon(story_type)}
                <label htmlFor="story-type">STORY TYPE</label>
                <select name="story type" defaultValue={story_type || ''}>
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
              <select name="story state" defaultValue={story_state || ''}>
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
            ></textarea>
          </div>
          </form> :
          <button className="story-preview-closed" onClick={this.handleClickPreview}>
            <div>
              <div>{this.storyTypeIcon(story_type)}</div>
              <div>{name}</div>
            </div>
            <div>{story_state}</div>
          </button>
        }
      </>
    )
  }
}
export default StoryPreviewItem;