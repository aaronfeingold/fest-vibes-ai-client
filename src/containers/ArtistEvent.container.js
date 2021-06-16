import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtistEvents } from '../services/ArtistEvents.service';
import ArtistEventsList from "../components/lists/ArtistEvents.list"

const initialPostState = { id: null, title: ""}

function getArtistEvents() {
  const dispatch = useDispatch()
	const apiStatus = useSelector(state => state.posts.status);
	
	fetchArtistEvents()

  return(
		<div className="container-fluid">
			<ArtistEventsList apiStatus={apiStatus}/>
		</div>
		);
}

export default getArtistEvents