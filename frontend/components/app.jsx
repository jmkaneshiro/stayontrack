import React from "react";
import HomeContainer from './home/home_container';
import LoginFormContainer from './session_form/login_form_container';
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
    <h1>StayOnTrack is changing how teams build software-- one story at a time</h1>
    <Route path="/signin" component={LoginFormContainer} />
    <Route path="/signup" component={LoginFormContainer} />
  </>
);

export default App;