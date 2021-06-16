import {createAsyncThunk} from '@reduxjs/toolkit';

const cheerio = require("cheerio");
const axios = require('axios')
const ArtistEvent = require('../models/artist_event.model')

const url = 'https://www.wwoz.org/calendar/livewire-music'
const config = {
  headers: {'Access-Control-Allow-Origin': '*'}
}
export const fetchArtistEvents = createAsyncThunk(
  "aes/fetchArtistEvents",
  // scrapper function
  async () => {
    const html = await axios.get(url, config)
    const $ =  await cheerio.load(html.data)

    const links = $('a');
    const artist_events = {}
    $(links).each(function(i, link){
      let event_href = $(link).attr('href')
      if (event_href != undefined && event_href.includes("events") == true){
          let artist_event = {}
          let artist_name = $(link).text().replace(/\s+/g, '')
          artist_event["artist_name"] = artist_name
          artist_event["event_href"] = event_href
          artist_events[i] = artist_event
        }
    });

    let aes = ArtistEvent.createArtistEvents(artist_events)

    return aes
  }
)

  
