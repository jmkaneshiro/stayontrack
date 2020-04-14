import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login, signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'Sign Up',
  navLink: <div className="signup-signin-redirect">
            <span>Already have an account?</span>
            <Link to="/login">Log In</Link>
          </div>,
  formDescription: "Let's get tracking!"
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  demoLogin: () => dispatch(login({ email: "demo_user@mailinator.com", password: "password" }))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);