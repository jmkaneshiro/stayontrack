import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'Log In',
  navLink: <div className="signup-signin-redirect">Don't have an account? <Link to="/signup">Sign Up</Link></div>,
  formDescription: "Log In to continue to Pivotal Tracker."
});

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    demoLogin: () => dispatch(login({ email: "demo_user@mailinator.com", password: "password" }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);