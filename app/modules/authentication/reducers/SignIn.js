import {REQUEST_SIGN_IN,RECEIVE_SIGN_IN,ERROR_SIGN_IN} from '../actions/types';

export default (state = {isLoading: false, user:{}, error: false}, action = null) => {
  switch(action.type) {
    case REQUEST_SIGN_IN:
      return {...state, isLoading: true};
    case ERROR_SIGN_IN:
      return {...state, isLoading: false, error:action.error};
    case RECEIVE_SIGN_IN:
      return {...state, isLoading: false, user:action.user};
    default:
      return state;
  }
};