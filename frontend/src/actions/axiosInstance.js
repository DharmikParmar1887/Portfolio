

import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL || process.env.REACT_APP_API_URL_PRODUCTION;

const axiosInstance = axios.create({
    baseURL: apiURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
