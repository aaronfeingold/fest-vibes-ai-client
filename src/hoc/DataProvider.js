import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../reducers/Events.reducer';
import Spinner from '../components/Spinner.component';

const DATA_REFRESH_THRESHOLD = 6 * 60 * 60 * 1000; // 6 hours

export const withDataProvider = (WrappedComponent) => {
  const WithDataProvider = (props) => {
    const dispatch = useDispatch();
    const { apiStatus, lastUpdated, events } = useSelector(state => state.aes);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const checkAndFetchData = async () => {
        setIsLoading(true);

        const shouldFetchData =
          !lastUpdated ||
          !events.length ||
          (new Date() - new Date(lastUpdated) > DATA_REFRESH_THRESHOLD);

        if (shouldFetchData) {
          // todo: this HOC should take any thunk as a prop (ie for venues and genres)
          await dispatch(fetchEvents({}));
        }

        setIsLoading(false);
      };

      checkAndFetchData();
    }, [dispatch, lastUpdated, events.length]);

    // Show loading state when initially loading
    if (isLoading && events.length === 0) {
      return <Spinner />;
    }

    return <WrappedComponent {...props} dataStatus={apiStatus} />;
  };

  WithDataProvider.displayName = `WithDataProvider(${getDisplayName(WrappedComponent)})`;
  return WithDataProvider;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default withDataProvider;
