// Axios configuration for API calls
import axios from 'axios';

const API_KEY = 'gAAAAABpVNqy0Gs3i5WxaEF6vk8slMC9IvWoR7S8iMMKWMXeLT49fcwpiBPWqV_GpGJYPKZb-oqZhpbHCpIrJXOjquwiFMPeGj9oy3i5rAUiM01P5QxXdxb-l30QN4MrvPWHiTSRSbIW';

// Create axios instance with default config
export const apiClient = axios.create({
  baseURL: 'https://collection.apinext.in',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
    'accept': 'application/json'
  },
  timeout: 30000 // 30 seconds
});

// Request interceptor (optional - for logging)
apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor (optional - for error handling)
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response) {
      // Server responded with error status
      console.error('API Error:', error.response.status, error.response.data);
    } else if (error.request) {
      // Request made but no response
      console.error('Network Error:', error.request);
    } else {
      // Something else happened
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

