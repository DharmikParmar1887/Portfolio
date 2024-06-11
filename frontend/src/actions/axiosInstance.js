import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
    baseURL: apiURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
