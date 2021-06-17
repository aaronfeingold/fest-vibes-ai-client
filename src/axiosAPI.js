import axios from 'axios'

export const api = axios.create({
  baseURL: "http://localhost:8080/api/artist-events",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
});