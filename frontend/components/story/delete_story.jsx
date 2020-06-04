import React from "react";
import { withRouter } from "react-router-dom";

class DeleteStory extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.deleteStory(this.props.story);
    this.props.closeModal();
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
    const { story, closeModal } = this.props;

    return (
      <>
        <form onSubmit={this.handleSubmit} className="modal-form">
          <h1>Delete Story</h1>
          <div className="story-detail-wrapper">
            <div>{this.storyTypeIcon(story.story_type)}<span>{story.name}</span></div>
          </div>
          <div className="modal-form-actions">
            <input
              type="submit"
              className="dashboard-action-tabs-btn btn btn-red"
              value="Delete"
            />
            <button
              className="dashboard-action-tabs-btn btn btn-white"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(DeleteStory);

