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
      story_type: story_type
    };
  }

  render() {
    const { name, description, story_assignee_id,
      story_state, story_type
    } = this.state;

    return (
      <>
        <form className="story-preview-edit-form">
          <div className="story-text-field story-text-field-wrapper">
            <input type="text"
              placeholder="Update name of story"
              value={name}
              id="story-name"
            />
          </div>
          <div className="story-info-box-wrapper">
            <div className="story-info-box">
              <div className="story-info-box-row">
                { story_type === "feature" && (<i class="fas fa-star"></i>)}
                {story_type === "bug" && (<i class="fas fa-bug"></i>)}
                {story_type === "chore" && (<i class="fas fa-cog"></i>)}
                <label htmlFor="story-type">STORY TYPE</label>
                <select name="story type" id="story-type" value={story_type}>
                  <option value="feature">Feature</option>
                  <option value="bug">Bug</option>
                  <option value="chore">Chore</option>
                </select>
              </div>
              <div className="story-info-box-row">
                <label htmlFor="requester">REQUESTER</label>
                <div id="requester">{this.props.story.story_owner_id}</div>
              </div>
            </div>
            <div id="story-state-box">
              <label htmlFor="story-state">STORY STATE</label>
              <select name="story state" id="story-state" value={story_state}>
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
              id="description" 
              cols="30" 
              rows="3"
              placeholder="Add a description"
            >{description}</textarea>
          </div>
        </form>
      </>
    )
  }
}
export default StoryPreviewItem;