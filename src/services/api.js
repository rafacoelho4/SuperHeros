import axios from 'axios';

import access from '../utils/token';

const api = axios.create({
    baseURL: `https://superheroapi.com/api.php/${access.token}`
})

export default api;