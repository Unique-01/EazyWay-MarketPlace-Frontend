import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "context/AuthContext";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Create an axios instance
const apiClient = axios.create({
    baseURL: API_BASE_URL, // Replace with your API base URL
});

// Request interceptor to attach the authToken from localStorage
apiClient.interceptors.request.use(
    (config) => {
        const authToken =useContext(AuthContext)
        if (authToken) {
            config.headers["Authorization"] = authToken;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor (optional) for handling errors globally
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle errors globally, e.g., redirect to login on 401
        if (error.response && error.response.status === 401) {
            // Handle unauthorized access
            // You might want to redirect to login or show a message
        }
        return Promise.reject(error);
    }
);

export default apiClient;
