import * as SignInTypes from '../types';
import {default as SignIn} from '../reducers';

import Immutable from 'immutable';

describe('SignIn reducers', () => {
  it('should return the initial state for sign in', () => {
    expect(
      SignIn(undefined, {})
    ).to.eql(Immutable.fromJS({isLoading: false, user:{}, error: false}))
  });

  it('should handle REQUEST_SIGN_IN', () => {
    expect(
      SignIn({}, {type:SignInTypes.REQUEST_SIGN_IN})
    ).to.eql(Immutable.fromJS({isLoading:true}))
  });

  it('should handle ERROR_SIGN_IN', () => {
    expect(
      SignIn({}, {type:SignInTypes.ERROR_SIGN_IN,error:"error message sign in"})
    ).to.eql(Immutable.fromJS({isLoading: false, error:"error message sign in"}))
  });

  it('should handle RECEIVE_SIGN_IN', () => {
    expect(
      SignIn({}, {type:SignInTypes.RECEIVE_SIGN_IN,user:"user sign in"})
    ).to.eql(Immutable.fromJS({isLoading: false, user:"user sign in"}))
  });

});