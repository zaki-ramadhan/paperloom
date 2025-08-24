import axios from "axios"

// Create axios instance with global base URL for all API requests
const api = axios.create({
    baseURL : "http://localhost:5000/api"
});

export default api;