export default class ArtistEvent {
  static all = []

  constructor(artist_name, event_href){
    this.artist_name = artist_name;
    this.event_href = event_href;
  }

  static createArtistEvents(artistEventsData){
    let keys = Object.keys(artistEventsData)
    keys.forEach(key => {
      let artist_event_obj = artistEventsData[key]
      ArtistEvent.create(artist_event_obj)
    })

    return ArtistEvent.all
  }

  static create(ae_obj) {
    let ae = new ArtistEvent(ae_obj["artist_name"], ae_obj["event_href"])
    ArtistEvent.all.push(ae)
  }

}
