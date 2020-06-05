import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from "react-router-dom";


const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} /> 
    ) : (
      <Redirect to="/dashboard" />
    )
  )} />
)

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/login" />
      )
  )} />
)

const ProtectedProject = ({ component: Component, path, projectMembership, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    projectMembership ? (
      <Component {...props} />
    ) : (
        <Redirect to="/unreachable" />
      )
  )} />
)

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
  return { 
    loggedIn: Boolean(session.id),
    currentUser: users[session.id],
    projectMembership: users[session.id].project_memberships.includes(parseInt(ownProps.computedMatch.params.id))
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const ProtectedProjectRoute = withRouter(connect(mapStateToProps)(ProtectedProject));