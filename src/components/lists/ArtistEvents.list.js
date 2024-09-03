import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit";
import ArtistEvent from "../cards/ArtistEvent.card";
import DefaultErrorMessage from "../errors/DefaultErrorMessage.error";


const ArtistEventsList = ({apiStatus, apiErrorMessage, query, filterStatus}) => {
  let artistEventsData = useSelector(state => state.aes);
  let ae_objs = useMemo(()=>artistEventsData?.artist_events, [artistEventsData.artist_events]);

  let cards = ae_objs.map(ae => <ArtistEvent key={nanoid()} ae={ae}/>);

  let sortedCards = cards.sort((a,b)=> (Object.keys(a.props.ae) > Object.keys(b.props.ae)) ? 1 : -1);

  let filteredCards;

  if (filterStatus === true) {
    let findAlike = query.toLowerCase()
    filteredCards = sortedCards.filter(card => {
      let ae = card.props.ae
      let artist_name = Object.keys(ae)[0].toLocaleLowerCase()
      return artist_name.includes(findAlike)
    })
    return filteredCards
  };

  return (
    <div className="container-sm">
      {apiStatus === "failed" && (
        <DefaultErrorMessage error={apiErrorMessage} />
      )}
      {!!filteredCards ? filteredCards : sortedCards}
    </div>
  );
};

export default ArtistEventsList
