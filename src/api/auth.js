import axios from 'axios';
import { SERVER_URL } from '../constants'

axios.defaults.withCredentials = true;

export const getToken = (code) => {
    return axios.get(SERVER_URL + '/oauth2/token?code=' + code, { withCredentials: true })
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}