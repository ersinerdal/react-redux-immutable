import axios from 'axios';
import Config from '../../../config'

const config = new Config();

export function _signIn(params) {
  return axios.get(config.api + config.auth.signIn, {
    params: params
  });
}

export function _signUp(params) {
  return axios.get(config.api + config.auth.signUp, {
    params: params
  });
}