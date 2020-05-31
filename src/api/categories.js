import axios from 'axios';
import config from '../config'

axios.defaults.withCredentials = true;

export const getCategories = (code) => {
    return axios(config.SERVER_URL + '/categories', { withCredentials: true, method: 'get' })
        .then(function (response) {
            console.log(response);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}