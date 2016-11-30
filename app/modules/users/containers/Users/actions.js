import {getUsers} from '../../api';
import {getUsersMenu} from '../../api';
import {REQUEST_USERS, RECEIVE_USERS,REQUEST_USERS_MENU, RECEIVE_USERS_MENU} from './types';

function requestUsers() {
  return {
    type: REQUEST_USERS
  }
}

function requestUsersMenu() {
  return {
    type: REQUEST_USERS_MENU
  }
}

function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    userList: users
  }
}

function receiveUsersMenu(usersMenu) {
  return {
    type: RECEIVE_USERS_MENU,
    usersMenu: usersMenu
  }
}

export function fetchUsers() {
  return dispatch => {
    dispatch(requestUsers());
    return getUsers().then(function (response) {
      dispatch(receiveUsers(response.data));
    });
  }
}

export function fetchUsersMenu() {
  return dispatch => {
    dispatch(requestUsersMenu());
    return getUsersMenu().then(function (response) {
      dispatch(receiveUsersMenu(response.data));
    });
  }
}