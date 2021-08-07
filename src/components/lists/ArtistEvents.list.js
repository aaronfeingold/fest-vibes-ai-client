import React from 'react'
import { useSelector } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit"
import ArtistEvent from "../cards/ArtistEvent.card"
import ErrorMessage from '../errors/ErrorMessage';


const ArtistEventsList = ({apiStatus, apiErrorMessage, query, filterStatus}) => {
  let ae_objs = useSelector(state => state.aes.artist_events)

  let cards = ae_objs.map(ae => <ArtistEvent key={nanoid()} ae={ae}/>)

  let sortedCards = cards.sort((a,b)=> (Object.keys(a.props.ae) > Object.keys(b.props.ae)) ? 1 : -1)

  let filteredCards

  if (filterStatus === true) {
    let findAlike = query.toLowerCase()
    filteredCards = sortedCards.filter(card => {
      let ae = card.props.ae
      let artist_name = Object.keys(ae)[0].toLocaleLowerCase()
      return artist_name.includes(findAlike)
    })
    return filteredCards
  }

  return(
    <>
      {apiStatus === 'failed' && (
          <ErrorMessage error={apiErrorMessage} />
      )}
      {apiStatus === 'loading' &&  (
        <div className="spinner-border" role="status">
          <span className="sr-only">WWOZ</span>
        </div>
      )}
      {(!!filteredCards)? filteredCards : sortedCards}
    </>
  )
}

export default ArtistEventsList
