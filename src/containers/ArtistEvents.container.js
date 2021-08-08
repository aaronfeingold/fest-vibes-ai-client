import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchArtistEvents } from '../services/ArtistEvents.service';
import ArtistEventsList from "../components/lists/ArtistEvents.list";
import Searcher from '../components/cards/Searcher.card';

function ArtistEvents() {
  const dispatch = useDispatch();
	const aesState = useSelector(state => state.aes, shallowEqual);

	const { filterStatus, query, apiStatus } = aesState;

	useEffect(() => {
		dispatch(fetchArtistEvents())
	}, [dispatch]);

  return(
		<div className="container-lg">
				{apiStatus === 'loading' ?  (
					<div className="text-center" >
						<div className="spinner-border" role="status" style={{marginTop: 50, marginBottom: 50}}>
							<span className="sr-only">RE-WIRE</span>
						</div>
					</div>
				) : (
					<>
						<div className="row justify-content-center">
							<h3 className="text-center">This is your OZ Live-re-Wire</h3>
						</div>
						<Searcher filterStatus={filterStatus}/>
						<	br/>
						<ArtistEventsList apiStatus={apiStatus} filterStatus={filterStatus} query={query}/>
					</>
				)}
			</div>

		);
};

export default ArtistEvents;
