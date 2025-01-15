import { createSlice } from '@reduxjs/toolkit';
import { fetchArtistEvents } from '../reducers/ArtistEvents.reducer';

// set initial state of slice of store
export const initialState = {
  apiStatus: 'loading',
  filterStatus: null,
  query: '',
  error: null,
  artistEvents: [],
};

// a slice of root reducer
const artistEventsSlice = createSlice({
  name: 'aes',
  initialState,
  reducers: {
    setFilterStatus(state, action) {
      state.filterStatus = action.payload;
    },
    updateQuery(state, action) {
      state.query = action.payload;
    },
    resetApiStatus(state, action) {
      state.apiStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArtistEvents.pending, (state) => {
      state.apiStatus = 'loading';
    });
    builder.addCase(fetchArtistEvents.fulfilled, (state, action) => {
      state.apiStatus = 'succeeded';
      state.artistEvents = action.payload ?? [];
    });
    builder.addCase(fetchArtistEvents.rejected, (state, action) => {
      state.apiStatus = 'failed';
      state.error = action.payload
        ? {
            message: action.payload.message,
            type: action.payload.type,
            code: action.payload.code,
          }
        : {
            message: action.error.message || 'An unknown error occurred',
            type: 'UNKNOWN_ERROR',
            code: 500,
          };
      // clear out artistEvents if there is an error
      state.artistEvents = [];
    });
  },
});

export const { resetApiStatus, setFilterStatus, updateQuery } =
  artistEventsSlice.actions;
export default artistEventsSlice.reducer

