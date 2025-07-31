import { createAsyncThunk } from '@reduxjs/toolkit';
import { ServiceError } from '../utils/CustomError';
import api from '../api';

export const fetchEvents = createAsyncThunk(
  'events/fetchEvents',
  async (_, { rejectWithValue }) => {
    try {
      const payload = await api.fetchArtistEvents();
      return payload;
    } catch (error) {
      if (error instanceof ServiceError) {
        return rejectWithValue({
          message: error.message,
          type: error.type,
          code: error.code,
        });
      }

      // Handle any other errors as a generic error
      return rejectWithValue({
        message: 'An unexpected error occurred',
        type: 'UNKNOWN_ERROR',
        code: 500,
      });
    }
  }
);
