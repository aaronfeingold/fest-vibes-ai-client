import React from 'react'

const ArtistEvent = ({ae}) => {

  let {id, artist_name, event_href} = ae 

  return(
    <div className="artist-event-card" id={id} style={{ width: '18rem' }}>
      <div className="card-body">
        <ul className="card-title">
          <li className="card-title artist-name">
            {artist_name}
          </li>
          <li className="card-title event-href">
            <button className="btn btn-primary" onClick={()=> window.open(`https://www.wwoz.org${event_href}`, "_blank")}>Details Here</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ArtistEvent;