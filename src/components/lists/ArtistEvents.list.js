import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import ArtistEvent from "../cards/ArtistEvent.card";
import Pagination from "../Pagination.component";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  let cards = aeObjs.map((ae) => <ArtistEvent key={nanoid()} ae={ae} />);

  let sortedCards = cards.sort((a, b) =>
    Object.keys(a.props.ae) > Object.keys(b.props.ae) ? 1 : -1
  );

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
    <div className="container-md">
      {apiStatus === "failed" && (
        <DefaultErrorMessage error={apiErrorMessage} />
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        itemCount={cardCount}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
      <div className={`d-flex flex-wrap justify-content-center ${styles.grid}`}>
        {paginatedCards}
      </div>
    </div>
  );
};

export default ArtistEventsList;
