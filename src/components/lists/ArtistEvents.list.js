import React from 'react'
import { useSelector } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit"
import ArtistEvent from "../cards/ArtistEvent.card"
import ErrorMessage from '../errors/ErrorMessage';

const ArtistEventsList = ({apiStatus}) => {
  let apiErrorMessage = useSelector(state => state.aes.error);
  
  let ae_obs = useSelector(state => state.aes.artist_events)

  let cards = ae_obs.map(ae => <ArtistEvent key={nanoid()} ae={ae}/>)
  
  let sorted_cards = cards.sort((a,b)=> (Object.keys(a.props.ae) > Object.keys(b.props.ae)) ? 1 : -1)

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