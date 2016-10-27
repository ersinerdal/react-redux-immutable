import * as SignUpTypes from '../types';
import {default as SignUp} from '../reducers';

import Immutable from 'immutable';

describe('SignUp Reducers', () => {

  it('should return the initial state for sign up', () => {
    expect(
      SignUp(undefined, {})
    ).to.eql(Immutable.fromJS({isLoading:false,user: {},error:false}))
  });

  it('should handle REQUEST_SIGN_UP', () => {
    expect(
      SignUp({}, {type:SignUpTypes.REQUEST_SIGN_UP})
    ).to.eql(Immutable.fromJS({isLoading:true}))
  });

  it('should handle ERROR_SIGN_UP', () => {
    expect(
      SignUp({}, {type:SignUpTypes.ERROR_SIGN_UP,error:"error message sign up"})
    ).to.eql(Immutable.fromJS({isLoading: false, error:"error message sign up"}))
  });

  it('should handle RECEIVE_SIGN_UP', () => {
    expect(
      SignUp({}, {type:SignUpTypes.RECEIVE_SIGN_UP,user:"user sign up"})
    ).to.eql(Immutable.fromJS({isLoading: false, user:"user sign up"}))
  });

});