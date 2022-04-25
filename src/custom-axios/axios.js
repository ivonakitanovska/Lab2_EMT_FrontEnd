import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://guarded-plains-81833.herokuapp.com/api',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

export default instance;
