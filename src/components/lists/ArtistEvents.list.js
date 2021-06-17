import React from 'react'
import { useSelector } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit"
import ArtistEvent from "../cards/ArtistEvent.card"
import ErrorMessage from '../errors/ErrorMessage';

const ArtistEventsList = ({apiStatus}) => {
  let apiErrorMessage = useSelector(state => state.aes.error);
  
  let ae_data = useSelector(state => state.aes.artist_events)
  let ae_objs = ae_data[0]
  
  let aes = []

  for (var key in ae_objs) {
    if (ae_objs.hasOwnProperty(key)){
      let ae_obj = ae_objs[key]
      aes.push(ae_obj)
    }
  }

  let cards = aes.map(ae => <ArtistEvent key={nanoid()} ae={ae}/>)
  
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