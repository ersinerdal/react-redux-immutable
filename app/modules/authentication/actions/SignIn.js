import {REQUEST_SIGN_IN,RECEIVE_SIGN_IN,ERROR_SIGN_IN} from '../actions/types';
import {_signIn} from '../api/authApi';
import { push } from 'react-router-redux'

function requestSignIn() {
  return {
    type: REQUEST_SIGN_IN
  }
}
function errorSignIn(error) {
  return {
    type: ERROR_SIGN_IN,
    error
  }
}
const receiveSignIn = (user) => {
  return {
    type: RECEIVE_SIGN_IN,
    user
  }
};

export const signIn = (username, password) => {
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
