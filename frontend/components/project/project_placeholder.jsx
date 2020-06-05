import React from "react";
import { connect } from 'react-redux';

const ProjectPlaceholder = () => (
  <>
    {/* {project && <TopNavigation
      currentUser={currentUser}
      project={project}
    />} */}
    <section className="project-container">
      <h1>Sorry, we couldn't find that project</h1>
      <p>It may be private, deleted, or you haven't been invited to it yet.</p>
    </section>
  </>

);

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(null, mapDispatchToProps)(ProjectPlaceholder);