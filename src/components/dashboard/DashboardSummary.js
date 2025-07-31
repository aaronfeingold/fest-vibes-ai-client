import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../utils/formatDate';
import styles from './DashboardSummary.module.css';

const DashboardSummary = ({ stats, dataStatus }) => {
  const today = formatDate(new Date());

  return (
    <div className={`card ${styles.summaryCard}`}>
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-md-6">
            <h5 className="card-title">Music Events Summary</h5>
            <p className="card-text">
              {dataStatus === 'loading' && stats.totalEvents > 0 ?
                '(Refreshing data in background...)' :
                `Data last updated: ${today}`}
            </p>
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <div className={`${styles.refreshIndicator} ${dataStatus === 'loading' ? styles.loading : ''}`}>
              <span className={styles.dot}></span>
              <span>{dataStatus === 'loading' ? 'Syncing...' : 'Up to date'}</span>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-6 col-md">
            <div className={styles.stat}>
              <h3>{stats.eventsToday}</h3>
              <p>Events Today</p>
            </div>
          </div>
          <div className="col-6 col-md">
            <div className={styles.stat}>
              <h3>{stats.totalEvents}</h3>
              <p>Total Events</p>
            </div>
          </div>
          <div className="col-6 col-md">
            <div className={styles.stat}>
              <h3>{stats.totalArtists}</h3>
              <p>Artists</p>
            </div>
          </div>
          <div className="col-6 col-md">
            <div className={styles.stat}>
              <h3>{stats.totalVenues}</h3>
              <p>Venues</p>
            </div>
          </div>
          <div className="col-6 col-md">
            <div className={styles.stat}>
              <h3>{stats.totalGenres}</h3>
              <p>Music Genres</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardSummary.propTypes = {
  stats: PropTypes.shape({
    totalEvents: PropTypes.number.isRequired,
    totalArtists: PropTypes.number.isRequired,
    totalVenues: PropTypes.number.isRequired,
    totalGenres: PropTypes.number.isRequired,
    eventsToday: PropTypes.number.isRequired,
  }).isRequired,
  dataStatus: PropTypes.string.isRequired,
};

export default DashboardSummary;
