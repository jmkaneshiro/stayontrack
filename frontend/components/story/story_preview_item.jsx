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
          <input type="text"
            placeHolder="Update name of story"
            value={name}
          />
          <div>
            <span>STATE</span>
            <select name="story state" id="story-state" value={story_state}>
              <option value="unassigned">Unassigned</option>
              <option value="started">Started</option>
              <option value="finished">Finished</option>
              <option value="rejected">Rejected</option>
              <option value="rejected">Accepted</option>
            </select>
          </div>
          <div>
            <span>STORY TYPE</span>
            <select name="story type" id="story-type" value={story_type}>
              <option value="feature">Feature</option>
              <option value="bug">Bug</option>
              <option value="chore">Chore</option>
            </select>
          </div>
          <div>
            <span>REQUESTER</span>
            <div>{this.props.story_owner_id}</div>
          </div>
          <div>
            <span>DESCRIPTION</span>
            <input type="textarea"
              placeHolder="Add a description"
              value={description}
            />
          </div>
        </form>
      </>
    )
  }
}
export default StoryPreviewItem;