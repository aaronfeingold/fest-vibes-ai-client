import {createAsyncThunk} from '@reduxjs/toolkit';
import { api } from '../axiosApi'

export const fetchArtistEvents = createAsyncThunk(
  "aes/getArtistEvents",
  async (post) => {
    const response = await api.post('/', post);
    return response.data
  }
)

