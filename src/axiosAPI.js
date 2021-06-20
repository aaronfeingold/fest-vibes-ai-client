import axios from 'axios'

const BASE_URL = "https://w8ywpmy259.execute-api.us-east-1.amazonaws.com/beta/oz-re-wire"

export const axiosAPI = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
      "Content-type": "application/json"
    }
});
