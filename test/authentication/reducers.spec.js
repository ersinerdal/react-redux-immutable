import * as SignUpTypes from '../../app/modules/auth/components/SignUp/types';
import * as SignInTypes from '../../app/modules/auth/components/SignIn/types';
import {default as SignUp} from '../../app/modules/auth/components/SignUp/reducers';
import {default as SignIn} from '../../app/modules/auth/components/SignIn/reducers';

import Immutable from 'immutable';

describe('auth reducer init', () => {
  it('should return the initial state for sign in', () => {
    expect(
      SignIn(undefined, {})
    ).to.eql(Immutable.fromJS({isLoading: false, user:{}, error: false}))
  });
  it('should return the initial state for sign up', () => {
    expect(
      SignUp(undefined, {})
    ).to.eql(Immutable.fromJS({isLoading:false,user: {},error:false}))
  });
});

describe('auth reducer requests', () => {
  it('should handle REQUEST_SIGN_IN', () => {
    expect(
      SignIn({}, {type:SignInTypes.REQUEST_SIGN_IN})
    ).to.eql(Immutable.fromJS({isLoading:true}))
  });
  it('should handle REQUEST_SIGN_UP', () => {
    expect(
      SignUp({}, {type:SignUpTypes.REQUEST_SIGN_UP})
    ).to.eql(Immutable.fromJS({isLoading:true}))
  });
});


describe('auth reducer errors', () => {
  it('should handle ERROR_SIGN_IN', () => {
    expect(
      SignIn({}, {type:SignInTypes.ERROR_SIGN_IN,error:"error message sign in"})
    ).to.eql(Immutable.fromJS({isLoading: false, error:"error message sign in"}))
  });
  it('should handle ERROR_SIGN_UP', () => {
    expect(
      SignUp({}, {type:SignUpTypes.ERROR_SIGN_UP,error:"error message sign up"})
    ).to.eql(Immutable.fromJS({isLoading: false, error:"error message sign up"}))
  });
});


describe('auth reducer receive', () => {
  it('should handle RECEIVE_SIGN_IN', () => {
    expect(
      SignIn({}, {type:SignInTypes.RECEIVE_SIGN_IN,user:"user sign in"})
    ).to.eql(Immutable.fromJS({isLoading: false, user:"user sign in"}))
  });
  it('should handle RECEIVE_SIGN_UP', () => {
    expect(
      SignUp({}, {type:SignUpTypes.RECEIVE_SIGN_UP,user:"user sign up"})
    ).to.eql(Immutable.fromJS({isLoading: false, user:"user sign up"}))
  });
});