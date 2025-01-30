import axios from 'axios';
import { store } from '../redux/store';

const BASE_URL = 'http://3.7.81.243/projects/plie-api/public/api/';
const TIMEOUT = 10000; // timeout in milliseconds

const axiosInstance = axios.create({
  baseURL: BASE_URL, // Your base API URL here
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors for adding authorization token
axiosInstance.interceptors.request.use(
  config => {
    const state = store.getState();
    const token = state.auth.accessToken; // Assuming accessToken is stored in Redux
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// Handle response errors (for session expiry, etc.)
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response && error.response.status === 401) {
      // Handle logout or token expiry, if necessary
      store.dispatch({ type: 'auth/logout' }); // Example of dispatching logout
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
