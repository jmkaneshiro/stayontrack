import React from "react";
import { Link } from "react-router-dom";

const ProjectsIndexItem = ({ project }) => (
  <li>
    <section className="project-container">
      <div className="project-header">
        <Link to={`/projects/${project.id}`} className="project-title">{project.title}</Link>
        <div className="project-header-actions">
          {/* <a href=""><i className="far fa-heart"></i></a> */}
          <a href=""><i className="fas fa-user-friends"></i></a>
          {/* <a href=""><i className="fas fa-cog"></i></a> */}
        </div>
      </div>
      <section className="analytics">
        <div>Velocity 10</div>
        <div>Volatility 0%</div>
      </section>
    </section>
  </li>
);

export default ProjectsIndexItem;