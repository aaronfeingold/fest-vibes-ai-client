import React from "react";
import ArtistEventsList from "../components/lists/ArtistEvents.list";
import Searcher from "../components/cards/Searcher.card";

const ArtistEvents = ({ filterStatus, query, apiStatus }) => (
  <div className="container-lg">
    <Searcher filterStatus={filterStatus} />
    <br />
    <ArtistEventsList
      apiStatus={apiStatus}
      filterStatus={filterStatus}
      query={query}
    />
  </div>
);

export default ArtistEvents;
