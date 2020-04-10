import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'Sign Up',
  navLink: <div className="signup-signin-redirect">Already have an account? <Link to="/login">Log In</Link></div>,
  formDescription: "Let's get tracking!"
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);