import React from "react";
import { Link } from "react-router-dom";

class ProjectsIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteModal = this.handleDeleteModal.bind(this);
    this.handleCreateMembershipModal = this.handleCreateMembershipModal.bind(this);
  };

  handleDeleteModal(e) {
    e.preventDefault();
    this.props.fetchProject().then(()=> {
      this.props.openModal('delete project');
    });
  }

  handleCreateMembershipModal(e) {
    e.preventDefault();
    this.props.fetchProject().then(() => {
      this.props.openModal('create membership');
    });
  }

  render() {
    const project = this.props.project;

    return (
      <li>
        <section className="project-container">
          <div className="project-header">
            <Link to={`/projects/${project.id}`} className="project-title">{project.title}</Link>
            <div className="project-header-actions">
              {/* <a href=""><i className="far fa-heart"></i></a> */}
              <button onClick={this.handleCreateMembershipModal}><i className="fas fa-user-friends"></i></button>
              <button onClick={this.handleDeleteModal}><i className="far fa-trash-alt"></i></button>
            </div>
          </div>
          {/* <section className="analytics">
        <div>Velocity 10</div>
        <div>Volatility 0%</div>
      </section> */}
        </section>
      </li>
    )
  }
}

export default ProjectsIndexItem;