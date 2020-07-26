import axios from 'axios';
import config from '../config'
import { getCookie } from '../utils/cookie'

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
    const authToken = getCookie('authToken')
    config.headers.authToken = authToken;
    return config;
});

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