import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

export const fetchArtistEvents = createAsyncThunk(
  "aes/fetchArtistEvents",
  // get req to AWS API gateway, calls Lambda scrapper python function
  async () => {
    const response = await axios("https://w8ywpmy259.execute-api.us-east-1.amazonaws.com/beta/oz-re-wire");
    const payload = response.data
    return payload
  }
)


  
