import axios from 'axios';
import Config from '../../../config'

const config = new Config();

export function getUsers() {
    return axios.get(config.api+config.users.userList);
}

export function getUsersMenu() {
    return axios.get(config.api+config.users.usersMenu);
}
