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

export const getTasks = async () => {
    return axios.get('http://api.tasks.com:3001/tasks')
        .then(res => res.data)
        .catch(err => console.log('Failed to fetch the task', err))
}