import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ProjectFormContainer from '../project_form/project_form_container';
import MembershipFormContainer from '../membership_form/membership_form_container';
import DeleteStoryContainer from "../story/delete_story_container";
import DeleteProjectContainer from "../project/delete_project_container";
import AboutDeveloper from "../navigation/about_developer";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'create project':
      component = <ProjectFormContainer />
      break;
    case 'create membership':
      component = <MembershipFormContainer />
      break;
    case 'delete story':
      component = <DeleteStoryContainer />
      break;
    case 'delete project':
      component = <DeleteProjectContainer />
      break;
    case 'about the developer':
      component = <AboutDeveloper />
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
