import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

// const api = axios.create({
//   baseURL: "https://w8ywpmy259.execute-api.us-east-1.amazonaws.com/default/oz-re-wire",
//   headers: {"Access-Control-Allow-Origin": "*"}
// })

export const fetchArtistEvents = createAsyncThunk(
  "aes/fetchArtistEvents",
  // get req to AWS API gateway, calls Lambda scrapper python function
  async () => {
    const data = await axios("https://w8ywpmy259.execute-api.us-east-1.amazonaws.com/default/oz-re-wire");
    return data
  }
)

  
