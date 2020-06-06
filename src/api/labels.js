import axios from 'axios';
import config from '../config'

axios.defaults.withCredentials = true;

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
