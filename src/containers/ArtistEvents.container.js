import React from "react";
import ArtistEventsList from "../components/lists/ArtistEvents.list";

const ArtistEvents = ({ filterStatus, query, apiStatus }) => (
  <div className="container-lg">
    <br />
    <ArtistEventsList
      apiStatus={apiStatus}
      filterStatus={filterStatus}
      query={query}
    />
  </div>
);

export default ArtistEvents;
