import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import ArtistEvent from "../cards/ArtistEvent.card";
import DefaultErrorMessage from "../errors/DefaultErrorMessage.error";
import styles from "./ArtistEvents.list.module.css";

const ArtistEventsList = ({
  apiStatus,
  apiErrorMessage,
  query,
  filterStatus,
}) => {
  let artistEventsData = useSelector((state) => state.aes);
  let aeObjs = useMemo(
    () => artistEventsData?.artistEvents,
    [artistEventsData.artistEvents]
  );

  let cards = aeObjs.map((ae) => <ArtistEvent key={nanoid()} ae={ae} />);

  let sortedCards = cards.sort((a, b) =>
    Object.keys(a.props.ae) > Object.keys(b.props.ae) ? 1 : -1
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of cards per page
  const totalPages = Math.ceil(sortedCards.length / itemsPerPage);

  // Filter logic
  const filteredCards = filterStatus
    ? sortedCards.filter((card) => {
        const ae = card.props.ae;
        const artistName = Object.keys(ae)[0].toLowerCase();
        return artistName.includes(query.toLowerCase());
      })
    : sortedCards;

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCards = filteredCards.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container-sm">
      {apiStatus === "failed" && (
        <DefaultErrorMessage error={apiErrorMessage} />
      )}
      <div className={`d-flex flex-wrap justify-content-center ${styles.grid}`}>
        {paginatedCards}
      </div>
      <div className="d-flex justify-content-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`btn btn-outline-primary mx-1 ${styles.pageButton}`}
            onClick={() => handlePageChange(i + 1)}
            disabled={currentPage === i + 1}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArtistEventsList;
