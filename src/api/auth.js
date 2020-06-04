import axios from 'axios';
import config from '../config'

axios.defaults.withCredentials = true;

export const getToken = (code) => {
    return axios.get(config.SERVER_URL + '/oauth2/token?code=' + code, { withCredentials: true })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
            throw error;
        })
}