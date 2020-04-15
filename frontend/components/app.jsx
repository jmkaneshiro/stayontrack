import React from "react";
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Modal from './modal/modal';
import HomeContainer from './home/home_container';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <>
    <Modal />
    <Switch>
      <AuthRoute exact path="/" component={HomeContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute path="/dashboard" component={DashboardContainer} />
    </Switch>
    <footer>
      <p>Like what you see? <strong>Contact me!</strong></p>
      <a href="mailto:jmkaneshiro+hire_me@gmail.com?Subject=Interested%20Recruiter%20Or%20Hiring%20Manager" className="footer-info-link" target="_blank">
        <i className="far fa-envelope"></i>
      </a>
      <a href="https://www.linkedin.com/in/jared-kaneshiro-9b83322b/" className="footer-info-link" target="_blank">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/jmkaneshiro" className="footer-info-link" target="_blank">
        <i className="fab fa-github-square"></i>
      </a>
    </footer>
  </>
);

export default App;