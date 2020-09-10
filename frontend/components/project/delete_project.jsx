import React from "react";
import { withRouter } from "react-router-dom";

class DeleteProject extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.deleteProject(this.props.project.id);
    this.props.closeModal();
  }

  render() {
    const { closeModal } = this.props;

    return (
      <>
        <form onSubmit={this.handleSubmit} className="modal-form">
          <h1>Delete Project</h1>
          <div className="story-detail-wrapper">
            <div>Are you sure that you want to delete this project? Deleting this project is permanent and will also delete any related stories.</div>
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

export default withRouter(DeleteProject);

