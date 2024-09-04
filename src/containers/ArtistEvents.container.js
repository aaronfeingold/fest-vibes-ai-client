import React from "react";
import ArtistEventsList from "../components/lists/ArtistEvents.list";
import styles from "./ArtistEvents.container.module.css";

const ArtistEvents = ({ filterStatus, query, apiStatus }) => (
  <div className={`container-lg ${styles.artistEventsContainer}`}>
    <br />
    <ArtistEventsList
      apiStatus={apiStatus}
      filterStatus={filterStatus}
      query={query}
    />
  </div>
);

export default ArtistEvents;
