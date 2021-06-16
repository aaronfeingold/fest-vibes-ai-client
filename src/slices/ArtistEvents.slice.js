import { createSlice } from '@reduxjs/toolkit';
import { fetchArtistEvents } from '../services/ArtistEvents.service'

// set initial state of slice of store
export const initialState = {
  status: 'idle',
  error: null,
  artist_events: [],
};

// a slice of root reducer
const artistEventsSlice = createSlice({
  name: 'aes',
  initialState,
  reducers: {
    resetStatus(state) {state.status = 'idle'}
  },
  extraReducers: {
    [fetchArtistEvents.fulfilled]: (state, action) => {
      const aes = action.payload;
      const errors = (aes["errors"]) ? aes["errors"] : null;
      if (!!errors){
        state.status = 'failed'
        state.error = errors
      } else {
        state.artist_events.push(aes)
      }
    },
    [fetchArtistEvents.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error
  },
}
});

export const { resetStatus } = artistEventsSlice.actions
export default artistEventsSlice.reducer

