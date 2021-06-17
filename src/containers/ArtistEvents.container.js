import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtistEvents } from '../services/ArtistEvents.service';
import ArtistEventsList from "../components/lists/ArtistEvents.list"
import Searcher from '../components/cards/Searcher.card'



function ArtistEvents() {
  const dispatch = useDispatch()

	const apiStatus = useSelector(state => state.aes.status);
	
	useEffect(() => {
		dispatch(fetchArtistEvents())
	})
	

  return(
		<div className="container-fluid">
			<h3>This is your OZ Live-re-Wire</h3>
			<Searcher />
			<ArtistEventsList apiStatus={apiStatus}/>
		</div>
		);
}

export default ArtistEvents