import React from 'react'
import { useSelector } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit"
import ArtistEvent from "../cards/ArtistEvent.card"
import ErrorMessage from '../errors/ErrorMessage';

const ArtistEventsList = ({apiStatus}) => {
  let ae_data = useSelector(state => state.aes.artist_events)
  let apiErrorMessage = useSelector(state => state.aes.error);

  return(
    <>
      {apiStatus === 'loading' ? (
        <div> Loading </div>
      ):apiStatus === 'failed' ? (
          <ErrorMessage error={apiErrorMessage} />
      ):(
        <>
          { ae_data.map(ae => <ArtistEvent key={nanoid()} ae={ae}/>)}
        </>
      )}
    </>
  )
}

export default ArtistEventsList