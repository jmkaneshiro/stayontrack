import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = (user) => dispatch => SessionApiUtil.login(user)
  .then(currentUser => dispatch(receiveCurrentUser(currentUser)), 
  err => dispatch(receiveSessionErrors(err.responseJSON)));

export const logout = () => dispatch => SessionApiUtil.logout()
  .then(() => dispatch(logoutCurrentUser()),
    err => dispatch(receiveSessionErrors(err.responseJSON)));

export const signup = (user) => dispatch => SessionApiUtil.signup(user)
  .then(currentUser => dispatch(receiveCurrentUser(currentUser)), 
    err => dispatch(receiveSessionErrors(err.responseJSON)));