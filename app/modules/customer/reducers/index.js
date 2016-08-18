import {REQUEST_CUSTOMERS,RECEIVE_CUSTOMERS} from '../actions/actions';
import { createReducer } from 'redux-immutablejs'
import Immutable from 'immutable';

const initialState = Immutable.fromJS({ isLoading: false, customerList:[]});

export default createReducer(initialState, {
  [REQUEST_CUSTOMERS]: (state, action) => state.merge({
    isLoading: false
  }),
  [RECEIVE_CUSTOMERS]: (state, action) => state.merge({
    isLoading: false,
    customerList: action.customerList
  })
})
