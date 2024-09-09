import axios from 'axios'

// API Gateway URL
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000/api";

export const axiosAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
