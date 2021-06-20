import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosAPI } from '../axiosAPI'

export const fetchArtistEvents = createAsyncThunk(
  "aes/fetchArtistEvents",
  // get req to AWS API gateway, calls Lambda scrapper python function
  async () => {
    const response = await axiosAPI.get("/");
    const payload = response.data
    return payload
  }
)


  
