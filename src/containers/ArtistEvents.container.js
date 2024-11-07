import React, { useContext, useState } from 'react';
import { Element } from 'react-scroll';
import { shallowEqual, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { SpinnerContext } from '../containers/Home.container';
import Pagination from '../components/Pagination.component';
import ArtistEventsList from '../components/lists/ArtistEvents.list';
import ArtistEvent from '../components/cards/ArtistEvent.card';
import Searcher from '../components/cards/Searcher.card';
import styles from './ArtistEvents.container.module.css';

const ArtistEvents = () => {
  const { spinnerVisible } = useContext(SpinnerContext);
  const { artistEvents, apiStatus, filterStatus, query } = useSelector(
    (state) => state.aes,
    shallowEqual
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Your existing card logic
  let cards = artistEvents.map((ae) => <ArtistEvent key={nanoid()} ae={ae} />);
  let sortedCards = cards.sort((a, b) =>
    Object.keys(a.props.ae) > Object.keys(b.props.ae) ? 1 : -1
  );
  const cardCount = sortedCards.length;
  const totalPages = Math.ceil(cardCount / itemsPerPage);
  const filteredCards = filterStatus
    ? sortedCards.filter(({ props }) => {
        return Object.keys(props.ae)[0]
          .toLowerCase()
          .includes(query.toLowerCase());
      })
    : sortedCards;
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
    !spinnerVisible &&
    apiStatus !== 'failed' && (
      <Element name="artistEventsContainer">
        <div
          style={{
            position: 'relative',
            minHeight: '100vh',
            overflow: 'hidden',
          }}
        >
          {/* Top background blob */}
          <div
            style={{
              position: 'absolute',
              top: '-10%',
              left: '0',
              right: '0',
              height: '50%',
              zIndex: 0,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                background: 'linear-gradient(to right top, #ff80b5, #9089fc)',
                opacity: 0.3,
                width: '100%',
                height: '100%',
                transform: 'scale(2) rotate(30deg)',
                filter: 'blur(24px)',
                position: 'absolute',
              }}
            />
          </div>

          {/* Bottom background blob */}
          <div
            style={{
              position: 'absolute',
              bottom: '-10%',
              left: '0',
              right: '0',
              height: '50%',
              zIndex: 0,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                background: 'linear-gradient(to right top, #ff80b5, #9089fc)',
                opacity: 0.3,
                width: '100%',
                height: '100%',
                transform: 'scale(2)',
                filter: 'blur(24px)',
                position: 'absolute',
              }}
            />
          </div>

          {/* Your existing content */}
          <div
            id="artistEventsContainer"
            className={`container ${styles.artistEventsContainer}`}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <div className="row justify-content-center">
              <div className="col-12">
                <div className={`${styles.searchContainer} mb-3`}>
                  <Searcher />
                </div>
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
            </div>
          </div>
        </div>
      </Element>
    )
  );
};

export default ArtistEvents;
