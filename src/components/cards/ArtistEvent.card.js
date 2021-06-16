import React from 'react'

const ArtistEvent = ({ae}) => {

  let {artist_name, event_href} = ae 

  return(
    <div className="artist-event-card" id={id} style={{ width: '18rem' }}>
      <div className="card-body">
        <ul className="card-title">
          <li className="card-title artist-name">
            {artist_name}
          </li>
          <li className="card-title event-href">
            <a href={event_href}>Details Here</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ArtistEvent;