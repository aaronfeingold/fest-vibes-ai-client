import {createAsyncThunk} from '@reduxjs/toolkit';

import { api } from '../axiosAPI'
import cheerio from 'cheerio'

export const fetchArtistEvents = createAsyncThunk(
  "aes/fetchArtistEvents",
  // scrapper function
  async () => {
    const html = await api.get('/');
    const $ = cheerio.load(html.data);

    const links = $('a');
    const artist_events = {}
    $(links).each(function(i, link){
      let event_href = $(link).attr('href')
      if (event_href !== undefined && event_href.includes("events") === true){
          let artist_event = {}
          let artist_name = $(link).text().replace(/\B\s+|\s+\B/g, '')
          artist_event["artist_name"] = artist_name
          artist_event["event_href"] = event_href
          artist_events[i] = artist_event
        }
    });

    return artist_events
  }
)

  
