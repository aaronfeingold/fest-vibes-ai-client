import React from 'react'
import { useSelector } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit"
import ArtistEvent from "../cards/ArtistEvent.card"
import ErrorMessage from '../errors/ErrorMessage';

const ArtistEventsList = ({apiStatus}) => {
  let apiErrorMessage = useSelector(state => state.aes.error);
  
  let ae_obs = useSelector(state => state.aes.artist_events)

  let cards = ae_obs.map(ae => <ArtistEvent key={nanoid()} ae={ae}/>)
  
  let sorted_cards = cards.sort((a,b)=> 
    (a.props.ae.artist_name > b.props.ae.artist_name) ? 1 : -1
  )

  return(
    <>
      {apiStatus === 'loading' ? (
        <div> Loading </div>
      ):apiStatus === 'failed' ? (
          <ErrorMessage error={apiErrorMessage} />
      ):(
        <>
          { sorted_cards }
        </>
      )}
    </>
  )
}

export default ArtistEventsList