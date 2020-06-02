import * as UsersApiUtil from '../util/users_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const fetchUsers = () => dispatch => UsersApiUtil.fetchUsers()
  .then(users => dispatch(receiveUsers(users)));