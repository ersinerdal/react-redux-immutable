import axios from 'axios';
import Config from '../../../config'
const config = new Config();


export function getCustomers() {
    return axios.get(config.api + config.getCustomers);
}
