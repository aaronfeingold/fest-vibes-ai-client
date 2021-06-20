import {createAsyncThunk} from '@reduxjs/toolkit';
<<<<<<< HEAD
import axios from 'axios'
=======
import { axiosAPI } from '../axiosAPI'
>>>>>>> refactor

export const fetchArtistEvents = createAsyncThunk(
  "aes/fetchArtistEvents",
  // get req to AWS API gateway, calls Lambda scrapper python function
  async () => {
<<<<<<< HEAD
    const data = await axios("https://w8ywpmy259.execute-api.us-east-1.amazonaws.com/default/oz-re-wire");
    return data
=======
    const response = await axiosAPI.get("/");
    const payload = response.data
    return payload
>>>>>>> refactor
  }
)


  
