import axios from "axios"

// inm production, there's no localhost so we have to make this dynamic
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

// Create axios instance with global base URL for all API requests
const api = axios.create({
    baseURL : BASE_URL
});

export default api;