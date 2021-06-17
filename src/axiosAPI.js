import axios from 'axios'

export const api = axios.create({
  baseURL: "https://www.wwoz.org/calendar/livewire-music",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
});