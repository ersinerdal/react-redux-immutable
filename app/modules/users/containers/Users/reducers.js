import {REQUEST_USERS, RECEIVE_USERS, REQUEST_USERS_MENU, RECEIVE_USERS_MENU} from './types';
import { createReducer } from 'redux-immutablejs'
import Immutable from 'immutable';

const initialState = Immutable.fromJS({ usersIsLoading: false, usersMenuIsLoading: false, userList:[], usersMenu:[]});

export default createReducer(initialState, {
  [REQUEST_USERS]: (state, action) => state.merge({
    usersIsLoading: true
  }),
  [RECEIVE_USERS]: (state, action) => state.merge({
    usersIsLoading: false,
    userList: action.userList
  }),
  [REQUEST_USERS_MENU]: (state, action) => state.merge({
    usersMenuIsLoading: true
  }),
  [RECEIVE_USERS_MENU]: (state, action) => state.merge({
    usersMenuIsLoading: false,
    usersMenu: action.usersMenu
  })
})
