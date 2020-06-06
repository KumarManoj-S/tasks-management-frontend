import axios from 'axios';
import config from '../config'
import taskDTO from '../dtos/tasks'

axios.defaults.withCredentials = true;

const TASK_ENDPOINT = '/tasks'

export const createTasks = async (data) => {
    const task = taskDTO(data)

    return axios.post(config.SERVER_URL + TASK_ENDPOINT, task, { withCredentials: true })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}