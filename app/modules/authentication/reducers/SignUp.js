import {REQUEST_SIGN_UP,RECEIVE_SIGN_UP,ERROR_SIGN_UP} from '../actions/types';

export default (state = {isLoading: false, user:{}, error: false}, action = null) => {
  switch(action.type) {
    case REQUEST_SIGN_UP:
      return {...state, isLoading: true};
    case ERROR_SIGN_UP:
      return {...state, isLoading: false, error:action.error};
    case RECEIVE_SIGN_UP:
      return {...state, isLoading: false, user:action.user};
    default:
      return state;
  }
};