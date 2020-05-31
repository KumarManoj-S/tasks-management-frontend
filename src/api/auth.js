import axios from 'axios';
import config from '../config'

axios.defaults.withCredentials = true;

export const getToken = (code) => {
    return axios.get(config.SERVER_URL + '/oauth2/token?code=' + code, { withCredentials: true })
        .then(function (response) {
            // handle success
            console.log(response);
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}