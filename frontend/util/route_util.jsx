import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from "react-router-dom";


const Auth = ({ component: Component, path, currentUser, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !currentUser ? (
      <Component {...props} /> 
    ) : (
      <Redirect to="/dashboard" />
    )
  )} />
)

const Protected = ({ component: Component, path, currentUser, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !!currentUser ? (
      <Component {...props} />
    ) : (
        <Redirect to="/login" />
      )
  )} />
)

const ProtectedProject = ({ component: Component, path, currentUser, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !currentUser ? (
      <Redirect to="/login" />
    ) :
    currentUser.project_memberships.includes(parseInt(props.match.params.id)) ? (
      <Component {...props} />
    ) : (
        <Redirect to="/unreachable" />
      )
  )} />
)

const mapStateToProps = ({ session, entities: { users } }) => {
  return { 
    currentUser: users[session.id]
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const ProtectedProjectRoute = withRouter(connect(mapStateToProps)(ProtectedProject));