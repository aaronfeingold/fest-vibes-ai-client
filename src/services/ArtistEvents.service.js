import {createAsyncThunk} from '@reduxjs/toolkit';

import { api } from '../axiosAPI'

export const fetchArtistEvents = createAsyncThunk(
  "aes/fetchArtistEvents",
  // scrapper function
  async () => {
    const response = await api.get('/');
    return response.data
  }
)

  
