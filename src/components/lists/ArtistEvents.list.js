import React from 'react'
import { useSelector } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit"
import ArtistEvent from "../cards/ArtistEvent.card"
import ErrorMessage from '../errors/ErrorMessage';

const ArtistEventsList = ({apiStatus, apiErrorMessage, query, filterStatus}) => {
  let ae_data = useSelector(state => state.aes.artist_events)
  let ae_objs = ae_data[0]
  
  // create an array of objects to map over
  let aes = []

  for (var key in ae_objs) {
    if (ae_objs.hasOwnProperty(key)){
      let ae_obj = ae_objs[key]
      aes.push(ae_obj)
    }
  }

  let cards = aes.map(ae => <ArtistEvent key={nanoid()} ae={ae}/>)

  // artist events list
  let sorted_cards = cards.sort((a,b)=> (a.props.ae.artist_name > b.props.ae.artist_name) ? 1 : -1)

  if (filterStatus === true) {
    let findAlike = query.toLowerCase()
    let filtedCards = sorted_cards.filter((card) => { return card.props.ae.artist_name.toLowerCase().includes(findAlike)})

    sorted_cards = [...filtedCards]
  }
 
  return(
    <>
      {apiStatus === 'loading' ? (
        <div> Loading </div>
      ):apiStatus === 'failed' ? (
          <ErrorMessage error={apiErrorMessage} />
      ):(
        <>
        {sorted_cards}
        </>
      )}
    </>
  )
}

export default ArtistEventsList