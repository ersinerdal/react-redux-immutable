import * as types from '../../app/modules/authentication/actions/types';
import {SignUp} from '../../app/modules/authentication/reducers';
import {SignIn} from '../../app/modules/authentication/reducers';

describe('auth reducer init', () => {
  it('should return the initial state for sign in', () => {
    expect(
      SignIn(undefined, {})
    ).to.eql({isLoading: false,user: {},error: false })
  });
  it('should return the initial state for sign up', () => {
    expect(
      SignUp(undefined, {})
    ).to.eql({isLoading:false,user: {},error:false})
  });
});

describe('auth reducer requests', () => {
  it('should handle REQUEST_SIGN_IN', () => {
    expect(
      SignIn({}, {type:types.REQUEST_SIGN_IN})
    ).to.eql({isLoading:true})
  });
  it('should handle REQUEST_SIGN_UP', () => {
    expect(
      SignUp({}, {type:types.REQUEST_SIGN_UP})
    ).to.eql({isLoading:true})
  });
});


describe('auth reducer errors', () => {
  it('should handle ERROR_SIGN_IN', () => {
    expect(
      SignIn({}, {type:types.ERROR_SIGN_IN,error:"error message sign in"})
    ).to.eql({isLoading: false, error:"error message sign in"})
  });
  it('should handle ERROR_SIGN_UP', () => {
    expect(
      SignUp({}, {type:types.ERROR_SIGN_UP,error:"error message sign up"})
    ).to.eql({isLoading: false, error:"error message sign up"})
  });
});


describe('auth reducer receive', () => {
  it('should handle RECEIVE_SIGN_IN', () => {
    expect(
      SignIn({}, {type:types.RECEIVE_SIGN_IN,user:"user sign in"})
    ).to.eql({isLoading: false, user:"user sign in"})
  });
  it('should handle RECEIVE_SIGN_UP', () => {
    expect(
      SignUp({}, {type:types.RECEIVE_SIGN_UP,user:"user sign up"})
    ).to.eql({isLoading: false, user:"user sign up"})
  });
});