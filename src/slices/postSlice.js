import { createSlice } from '@reduxjs/toolkit';
import { saveNewPost } from '../services/ArtistEvents.service'

// set initial state of slice of store
export const initialState = {
  status: 'idle',
  error: null,
  artist_events: [],
};

// a slice of root reducer
const aesSlice = createSlice({
  name: 'aes',
  initialState,
  reducers: {
    resetStatus(state) {state.status = 'idle'}
  },
  extraReducers: {
    [getArtistEvents.fulfilled]: (state, action) => {
      const aes = action.payload;
      const errors = (aes["errors"]) ? aes["errors"] : null;
      if (!!errors){
        state.status = 'failed'
        state.error = errors
      } else {
        state.artist_events.push(aes)
      }
    },
    [getArtistEvents.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error
  },
}
});

export const { resetStatus } = postSlice.actions
export default aesSlice.reducer

