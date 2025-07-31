import { createSlice } from '@reduxjs/toolkit';
import { fetchEvents } from '../reducers/Events.reducer';

export const initialState = {
    apiStatus: 'loading',
    filterStatus: null,
    query: '',
    error: null,
    events: [],
    lastUpdated: null,
    filters: {
      genre: null,
      venue: null,
      artist: null,
      date: null,
      location: null,
    },
    sortBy: {
      field: 'performance_time',
      direction: 'asc'
    }
  };

const eventsSlice = createSlice({
  name: 'events',
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
    setFilter(state, action) {
        const { filterType, value } = action.payload;
        state.filters[filterType] = value;
      },
      resetFilters(state) {
        state.filters = initialState.filters;
      },
      setSortBy(state, action) {
        state.sortBy = action.payload;
      },
      refreshCachedData(state) {
        // This is a placeholder that will trigger the fetchArtistEvents thunk
        // The actual refreshing happens in the thunk
      }
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
  eventsSlice.actions;
export default eventsSlice.reducer

