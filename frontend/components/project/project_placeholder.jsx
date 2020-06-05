import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import TopNavigation from "../navigation/top_navigation";

const ProjectPlaceholder = ({ projectsDropdownLabel}) => (
  <>
    <TopNavigation projectsDropdownLabel={projectsDropdownLabel} />
    <section className="project-placeholder-wrapper">
      <h1>Sorry, we couldn't find that project</h1>
      <p>It may be private, deleted, or you haven't been invited to it yet.</p>
    </section>
  </>

);

const mapStateToProps = () => {
  return {
    projectsDropdownLabel:
      <nav className="toggle-dropdown project-nav">
        <input type="checkbox" id="project-nav-toggle" />
        <label htmlFor="project-nav-toggle" className="toggle-dropdown-label">
          <div>
            <img src={window.logoWhiteURL} alt="Logo" className="logo" />
            <span className="arrow-down"></span>
          </div>
        </label>
        <ul>
          <li><Link to="/dashboard"><i className="fas fa-home"></i><span>Dashboard</span></Link></li>
        </ul>
      </nav>
  };
};

export default connect(mapStateToProps)(ProjectPlaceholder);