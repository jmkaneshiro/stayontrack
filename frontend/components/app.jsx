import React from "react";
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import HomeContainer from './home/home_container';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={HomeContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <ProtectedRoute path="/dashboard" component={DashboardContainer} />
  </Switch>
);

export default App;