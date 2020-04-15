import React from "react";
import { closeModal } from '../../actions/modal_actions';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      project_owner_id: this.props.currentUser.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = Object.assign({}, this.state);
    this.props.createProject(project);
  }

  render() {
    const { currentUser, closeModal } = this.props;

    return (
      <>
        <form onSubmit={this.handleSubmit} className="create-project-form">
          <h1>Create a new project</h1>
          <label className="form-input-label">
            <span>Project Name</span>
            <input type="text"
              className="form-input-field"
              placeholder="Enter a name for your project"
              value={this.state.title}
              onChange={this.update("title")}
            />
          </label>
          <div className="form-input-label account-select">
            <span>Account</span>
            <span>{currentUser.name}'s Projects</span>
          </div>
          <div className="modal-form-footer">
            <button 
              className="dashboard-action-tabs-btn btn btn-white"
              onClick={ () => closeModal()} 
            >
              Cancel
            </button>
            <input
              type="submit"
              className="dashboard-action-tabs-btn btn btn-green"
              value="Create"
            />
          </div>
        </form>
      </>
    );
  }
}

export default ProjectForm;

