import React from 'react'
import { useSelector } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit"
import ArtistEvent from "../cards/ArtistEvent.card"
import ErrorMessage from '../errors/ErrorMessage';

const ArtistEventsList = ({apiStatus}) => {
  let ae_data = useSelector(state => state.aes.artist_events)
  let ae_objs = ae_data[0]
  
  let aes = []

  for (var key in ae_objs) {
    if (ae_objs.hasOwnProperty(key)){
      let ae_obj = ae_objs[key]
      aes.push(ae_obj)
    }
  }

  let apiErrorMessage = useSelector(state => state.aes.error);

  return(
    <>
      {apiStatus === 'loading' ? (
        <div> Loading </div>
      ):apiStatus === 'failed' ? (
          <ErrorMessage error={apiErrorMessage} />
      ):(
        <>
          { aes.map(ae => <ArtistEvent key={nanoid()} ae={ae}/>)}
        </>
      )}
    </>
  )
}

export default ArtistEventsList