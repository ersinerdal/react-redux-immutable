import {REQUEST_SIGN_UP,RECEIVE_SIGN_UP,ERROR_SIGN_UP} from '../actions/types';
import {_signIn} from '../api/authApi';
import { push } from 'react-router-redux'

function requestSignIn() {
  return {
    type: REQUEST_SIGN_UP
  }
}
function errorSignIn(error) {
  return {
    type: RECEIVE_SIGN_UP,
    error
  }
}
const receiveSignIn = (user) => {
  return {
    type: ERROR_SIGN_UP,
    user
  }
};

export const signUp = (username, password) => {
  return dispatch => {
    dispatch(requestSignIn());
    return _signIn({username, password}).then(function (response) {
      sessionStorage.setItem('user',JSON.stringify(response.data));
      dispatch(receiveSignIn(response.data));
      dispatch(push('/'));
    }).catch(function (ex) {
      dispatch(errorSignIn(ex));
    });
  }
};
