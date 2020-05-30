import axios from 'axios';
import config from '../config'

axios.defaults.withCredentials = true;

export const getCategories = (code) => {
    return axios.get(config.SERVER_URL + '/categories', { withCredentials: true })
        .then(function (response) {
            console.log(response);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}