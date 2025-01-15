import React from "react";
import PropTypes from 'prop-types';
import DefaultErrorMessage from '../errors/DefaultErrorMessage';
import styles from './ArtistEvents.list.module.css';

const ArtistEventsList = ({ apiStatus, apiErrorMessage, paginatedCards }) => (
  <div className="container-md">
    {apiStatus === 'failed' ? (
      <DefaultErrorMessage error={apiErrorMessage} />
    ) : (
      <div className={`d-flex flex-wrap justify-content-center ${styles.grid}`}>
        {paginatedCards}
      </div>
    )}
  </div>
);

ArtistEventsList.propTypes = {
  apiStatus: PropTypes.string.isRequired,
  apiErrorMessage: PropTypes.string,
  paginatedCards: PropTypes.array.isRequired,
};

export default ArtistEventsList;
