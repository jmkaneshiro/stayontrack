import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'Log In',
  navLink: <div className="app_signup_link">DON'T HAVE AN ACCOUNT? <Link to="/signup">SIGN UP</Link></div>,
  formDescription: 'Log In to continue to Pivotal Tracker.'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);