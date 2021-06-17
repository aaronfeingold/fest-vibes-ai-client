import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtistEvents } from '../services/ArtistEvents.service';
import ArtistEventsList from "../components/lists/ArtistEvents.list"
import Searcher from '../components/cards/Searcher.card'

function ArtistEvents() {
  const dispatch = useDispatch()

	const filterStatus = useSelector(state => state.aes.filterStatus)
  const query = useSelector(state => state.aes.query)
	const apiStatus = useSelector(state => state.aes.apiStatus);
	
	useEffect(() => {
		dispatch(fetchArtistEvents())
	})
	
  return(
		<div className="container-fluid">
			<h3>This is your OZ Live-re-Wire</h3>
			<Searcher filterStatus={filterStatus}/>
			<ArtistEventsList apiStatus={apiStatus} filterStatus={filterStatus} query={query}/>
		</div>
		);
}

export default ArtistEvents