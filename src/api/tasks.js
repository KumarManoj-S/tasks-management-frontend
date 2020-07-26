import axios from 'axios';
import config from '../config'
import taskDTO from '../dtos/tasks'
import { getCookie } from '../utils/cookie'

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
    const authToken = getCookie('authToken')
    config.headers.authToken = authToken;
    return config;
});

const TASK_ENDPOINT = '/tasks'

export const createTasks = async (data) => {
    const task = taskDTO(data)

    return axios.post(config.SERVER_URL + TASK_ENDPOINT, task, { withCredentials: true })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            throw error;
        })
}

export const getTasks = async (category) => {
    return axios.get(config.SERVER_URL + TASK_ENDPOINT + '?category=' + category)
        .then(res => res.data)
        .catch(err => console.log('Failed to fetch the task', err))
}

export const updateTasks = (taskId, oldTaskData) => {
    const taskToUpdate = taskDTO(oldTaskData);
    return axios.put(config.SERVER_URL + TASK_ENDPOINT + '/' + taskId, taskToUpdate)
        .then(res => res.data)
        .catch(err => console.log('Update failed', err));
}

export const deleteTasks = (taskId) => {
    return axios.delete(config.SERVER_URL + TASK_ENDPOINT + '/' + taskId)
        .then(res => res.status)
        .catch(err => console.log('Unable to delete task', err));
}

export const updateStatus = (taskId, status) => {
    return axios.put(config.SERVER_URL + TASK_ENDPOINT + '/' + taskId, { status: status })
        .then(res => res.data)
        .catch(err => console.log('Status change failed', err));
}
