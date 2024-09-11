import React, { useContext, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import Pagination from "../components/Pagination.component";
import ArtistEventsList from "../components/lists/ArtistEvents.list";
import ArtistEvent from "../components/cards/ArtistEvent.card";
import styles from "./ArtistEvents.container.module.css";
import { SpinnerContext } from "../containers/Home.container";

const ArtistEvents = () => {
  const { spinnerVisible } = useContext(SpinnerContext);
  const { artistEvents, apiStatus, filterStatus, query } = useSelector(
    (state) => state.aes,
    shallowEqual
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  let cards = artistEvents.map((ae) => <ArtistEvent key={nanoid()} ae={ae} />);

  // todo: handle this logic on the backend with a query param
  // todo: could be refactored
  let sortedCards = cards.sort((a, b) =>
    Object.keys(a.props.ae) > Object.keys(b.props.ae) ? 1 : -1
  );
  // todo: send artist event count (and/or pages) from backend
  const cardCount = sortedCards.length;

  const totalPages = Math.ceil(cardCount / itemsPerPage);

  // Filter logic
  const filteredCards = filterStatus
    ? sortedCards.filter(({ props }) => {
        return Object.keys(props.ae)[0]
          .toLowerCase()
          .includes(query.toLowerCase());
      })
    : sortedCards;

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCards = filteredCards.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (ipp) => {
    setItemsPerPage(ipp);
    setCurrentPage(1);
  };

  return (
    !spinnerVisible && (
      <div
        id="artistEvents"
        className={`container-lg ${styles.artistEventsContainer}`}
      >
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemCount={cardCount}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
        <ArtistEventsList
          apiStatus={apiStatus}
          filterStatus={filterStatus}
          paginatedCards={paginatedCards}
        />
      </div>
    )
  );
};

export default ArtistEvents;
