import React from "react";
import { connect } from "react-redux";
import { createProjectMembership } from "../../actions/project_actions";
import { selectAllUsers } from "../../reducers/selectors";
import { closeModal } from "../../actions/modal_actions";
import MembershipForm from "./membership_form";

const mapStateToProps = ({ entities: { users, focused_item: { project }}}) => {
  const currentMembers = [];
  const availableUsers = [];

  selectAllUsers(users).forEach(user =>
    project.project_members.includes(user.id) ?
      currentMembers.push(user) : availableUsers.push(user)
  );
  
  return {
    project: project,
    currentMembers: currentMembers,
    availableUsers: availableUsers
  };
};

const mapDispatchToProps = dispatch => ({
  createProjectMembership: (projectMembership) => dispatch(createProjectMembership(projectMembership)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(MembershipForm);