import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'Sign In',
  navLink: <div>DON'T HAVE AN ACCOUNT? <Link to="/signup">SIGN UP</Link></div>,
  formDescription: 'Sign in to continue to Pivotal Tracker.'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);