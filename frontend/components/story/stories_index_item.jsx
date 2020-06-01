import React from "react";
import { Link } from "react-router-dom";

const StoryIndexItem = ({ story }) => (
  <li>
    <section>
      <Link to={`/projects/${story.project_id}/stories/${story.id}`} className="project-title">{story.name}</Link>
    </section>
  </li>
);

export default StoryIndexItem;