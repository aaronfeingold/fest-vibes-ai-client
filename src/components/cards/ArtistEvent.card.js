import React from 'react'

const ArtistEvent = ({ae}) => {
  let artist_name;
  let event_href;

  for (var key in ae) {
    if (ae.hasOwnProperty(key)){
      event_href = ae[key]
      artist_name = key
    }
  }

  return(
    <div className="card" id={artist_name} style={{ width: '18rem' }}>
      <div className="card-body">
        <ul className="card-info">
          <li className="card-info artist-name">
            {artist_name}
          </li>
          <li className="card-info event-href">
            <button className="btn btn-primary"onClick={()=> window.open(`https://www.wwoz.org${event_href}`, "_blank")}>Details Here</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ArtistEvent;