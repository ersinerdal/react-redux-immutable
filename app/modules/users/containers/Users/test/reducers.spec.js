import * as UsersTypes from '../types';
import {default as Users} from '../reducers';

import Immutable from 'immutable';

describe('Users reducers', () => {
  it('should return the initial state for sign in', () => {
    expect(
      Users(undefined, {})
    ).to.eql(Immutable.fromJS({ usersIsLoading: false, usersMenuIsLoading: false, userList:[], usersMenu:[]}));
  });

  it('should handle REQUEST_USERS', () => {
    expect(
      Users({}, {type:UsersTypes.REQUEST_USERS})
    ).to.eql(Immutable.fromJS({usersIsLoading:true}))
  });

  it('should handle RECEIVE_USERS', () => {
    expect(
      Users({}, {type:UsersTypes.RECEIVE_USERS,userList:[]})
    ).to.eql(Immutable.fromJS({usersIsLoading: false, userList:[]}))
  });

  it('should handle REQUEST_USERS_MENU', () => {
    expect(
      Users({}, {type:UsersTypes.REQUEST_USERS_MENU})
    ).to.eql(Immutable.fromJS({usersMenuIsLoading:true}))
  });

  it('should handle RECEIVE_USERS_MENU', () => {
    expect(
      Users({}, {type:UsersTypes.RECEIVE_USERS_MENU,usersMenu:[]})
    ).to.eql(Immutable.fromJS({usersMenuIsLoading: false, usersMenu:[]}))
  });


});