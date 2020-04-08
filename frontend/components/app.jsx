import React from "react";
import HomeContainer from './home/home_container';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <>
    <HomeContainer />
    <Route path="/signin" component={LoginFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
  </>
);

export default App;