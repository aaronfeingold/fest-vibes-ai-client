import React from "react";
import ArtistEventsList from "../components/lists/ArtistEvents.list";
import styles from "./ArtistEvents.container.module.css";

const ArtistEvents = ({ filterStatus, query, apiStatus, spinnerVisible }) =>
  !spinnerVisible ? (
    <div
      id="artistEvents"
      className={`container-lg ${styles.artistEventsContainer}`}
    >
      <ArtistEventsList
        apiStatus={apiStatus}
        filterStatus={filterStatus}
        query={query}
      />
    </div>
  ) : (
    <></>
  );

export default ArtistEvents;
