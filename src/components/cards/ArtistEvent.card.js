import React, { useMemo } from "react";
import { nanoid } from "@reduxjs/toolkit";
import styles from "./ArtistEvent.card.module.css";

const ArtistEvent = ({ ae }) => {
  const [artistName, eventHref] = Object.entries(ae)[0];
  const windowLink = useMemo(() => {
    if (eventHref.includes("wwoz.org")) {
      return eventHref;
    } else {
      return `https://www.wwoz.org${eventHref}`;
    }
  }, [artistName, eventHref]);

  return (
    <div
      className={`card mb-4 ${styles.card}`}
      id={`${artistName}-${nanoid()}`}
      style={{ width: "100%", maxWidth: "20rem" }}
    >
      <div className="card-body text-center">
        <h5 className={`card-title ${styles.cardTitle}`}>{artistName}</h5>
        <button
          className={`btn btn-primary mt-2 ${styles.btnPrimary}`}
          onClick={() => window.open(windowLink, "_blank")}
        >
          Details Here
        </button>
      </div>
    </div>
  );
};

export default ArtistEvent;
