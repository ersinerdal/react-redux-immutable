import {REQUEST_SIGN_IN,RECEIVE_SIGN_IN,ERROR_SIGN_IN} from './types';
import { createReducer } from 'redux-immutablejs'
import Immutable from 'immutable';

const initialState = Immutable.fromJS({isLoading: false, user:{}, error: false});

export default createReducer(initialState, {
  [REQUEST_SIGN_IN]: (state, action) => state.merge({
    isLoading: true
  }),
  [ERROR_SIGN_IN]: (state, action) => state.merge({
    isLoading: false,
    error:action.error
  }),
  [RECEIVE_SIGN_IN]: (state, action) => state.merge({
    isLoading: false,
    user:action.user
  })
});