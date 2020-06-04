import axios from 'axios';
import config from '../config'

axios.defaults.withCredentials = true;

export const getCategories = (code) => {
    return axios(config.SERVER_URL + '/categories', { withCredentials: true, method: 'get' })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const createCategory = (category) => {
    return axios({
        url: config.SERVER_URL + '/categories',
        data: { name: category },
        withCredentials: true,
        method: 'post'
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}