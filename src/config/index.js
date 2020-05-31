const dev = {
    SERVER_URL: 'http://api.tasks.com:3001',
    COOKIE_DOMAIN: '.tasks.com'
}

const prod = {
    SERVER_URL: 'https://tasksmanagementapi.herokuapp.com',
    COOKIE_DOMAIN: '.herokuapp.com'
}

const config = process.env.REACT_APP_ENV === 'prod'
    ? prod
    : dev;


export default {
    ...config
};