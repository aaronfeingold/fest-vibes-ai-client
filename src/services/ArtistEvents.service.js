import {createAsyncThunk} from '@reduxjs/toolkit';
import { api } from '../axiosApi'

export const fetchArtistEvents = createAsyncThunk(
  "aes/fetchArtistEvents",
  async () => {
    const response = await api.get('/');
    return response.data
  }
)

