import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Element } from 'react-scroll';
import { withDataProvider } from '../hoc/DataProvider';
import {
  selectTopGenres,
  selectTopVenues,
  selectTopStreets,
  selectGenres,
  selectArtists,
  selectVenues,
  selectAllEvents
} from '../slices/Events.slice';
import GenreDistributionChart from '../components/charts/GenreDistribution.chart';
import VenueDistributionChart from '../components/charts/VenueDistribution.chart';
import TopLocationsChart from '../components/charts/TopLocations.chart';
import EventsMap from '../components/maps/EventsMap';
import DashboardSummary from '../components/dashboard/DashboardSummary';
import DashboardTile from '../components/dashboard/DashboardTile';
import styles from './Dashboard.container.module.css';

const Dashboard = ({ dataStatus }) => {
  const allEvents = useSelector(selectAllEvents);
  const topGenres = useSelector(state => selectTopGenres(state, 5));
  const topVenues = useSelector(state => selectTopVenues(state, 5));
  const topStreets = useSelector(state => selectTopStreets(state, 5));
  const allGenres = useSelector(selectGenres);
  const allArtists = useSelector(selectArtists);
  const allVenues = useSelector(selectVenues);

  // Stats for dashboard
  const stats = useMemo(() => ({
    totalEvents: allEvents.length,
    totalArtists: allArtists.length,
    totalVenues: allVenues.length,
    totalGenres: allGenres.length,
    eventsToday: allEvents.filter(event => {
      const today = new Date().toISOString().split('T')[0];
      return event.event_data.event_date === today;
    }).length
  }), [allEvents, allArtists, allVenues, allGenres]);

  // For the map view toggle
  const [showMap, setShowMap] = useState(false);

  return (
    <Element name="dashboardContainer">
      <div className={`container-fluid ${styles.dashboardContainer}`}>
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="text-center mb-4">New Orleans Music Dashboard</h2>
            <DashboardSummary stats={stats} dataStatus={dataStatus} />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <DashboardTile title="Genre Distribution">
              <GenreDistributionChart data={topGenres} />
            </DashboardTile>
          </div>
          <div className="col-md-6">
            <DashboardTile title="Top Venues">
              <VenueDistributionChart data={topVenues} />
            </DashboardTile>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <DashboardTile title="Top Streets">
              <TopLocationsChart data={topStreets} />
            </DashboardTile>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <DashboardTile
              title={showMap ? "Event Locations Map" : "Event Location Heat Map"}
              actions={
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => setShowMap(!showMap)}
                >
                  {showMap ? "Show Heat Map" : "Show Map View"}
                </button>
              }
            >
              <EventsMap events={allEvents} heatmap={!showMap} />
            </DashboardTile>
          </div>
        </div>
      </div>
    </Element>
  );
};

Dashboard.propTypes = {
  dataStatus: PropTypes.string.isRequired
};

export default withDataProvider(Dashboard);
