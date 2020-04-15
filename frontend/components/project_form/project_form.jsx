import React from "react";

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
    const { currentUser } = this.props;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label className="auth-input-label">Project Name
            <input type="text"
              className="auth-input-field"
              placeholder="Enter a name for your project"
              value={this.state.title}
              onChange={this.update("title")}
            />
          </label>
          <div>{currentUser.name}'s Projects</div>
          <input type="submit" className="auth-submit" value="Create" />
        </form>
      </>
    );
  }
}

export default ProjectForm;

