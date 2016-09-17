import {REQUEST_SIGN_UP,RECEIVE_SIGN_UP,ERROR_SIGN_UP} from './types';
import { createReducer } from 'redux-immutablejs'
import Immutable from 'immutable';

const initialState = Immutable.fromJS({isLoading: false, user:{}, error: false});

export default createReducer(initialState, {
  [REQUEST_SIGN_UP]: (state, action) => state.merge({
    isLoading: true
  }),
  [ERROR_SIGN_UP]: (state, action) => state.merge({
    isLoading: false,
    error:action.error
  }),
  [RECEIVE_SIGN_UP]: (state, action) => state.merge({
    isLoading: false,
    user:action.user
  })
});