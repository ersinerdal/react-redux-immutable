import axios from 'axios';
import Config from 'config'

const config = new Config();

export function getCards() {
    return axios.get(config.api+'/cards'); // TO DO: get /cards path from config
}
