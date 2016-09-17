import {REQUEST_CARDS, RECEIVE_CARDS} from './types';
import { createReducer } from 'redux-immutablejs'
import Immutable from 'immutable';

const initialState = Immutable.fromJS({ isLoading: false, cardList:[]});

export default createReducer(initialState, {
  [REQUEST_CARDS]: (state, action) => state.merge({
    isLoading: false
  }),
  [RECEIVE_CARDS]: (state, action) => state.merge({
    isLoading: false,
    cardList: action.cardList
  })
})
