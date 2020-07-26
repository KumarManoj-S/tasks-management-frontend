import axios from 'axios';
import config from '../config'
import { getCookie } from '../utils/cookie'

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
    const authToken = getCookie('authToken')
    config.headers.authToken = authToken;
    return config;
});

const LABELS_ENDPOINT = '/label'

export const getLabels = () => {
    return axios(config.SERVER_URL + LABELS_ENDPOINT, { withCredentials: true, method: 'get' })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}
