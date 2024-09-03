import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchArtistEvents } from "../services/ArtistEvents.service";
import ArtistEvents from "../containers/ArtistEvents.container";
import Spinner from "../components/Spinner.component";
import Header from "../components/Header.component";

const Home = () => {
  const dispatch = useDispatch();
  const aesState = useSelector((state) => state.aes, shallowEqual);

  const { filterStatus, query, apiStatus } = aesState;

  useEffect(() => {
    dispatch(fetchArtistEvents());
  }, [dispatch]);

  return (
    <div className="container-lg">
      <Header />
      {apiStatus === "loading" ? (
        <Spinner />
      ) : (
        <ArtistEvents
          filterStatus={filterStatus}
          query={query}
          apiStatus={query}
        />
      )}
    </div>
  );
};

export default Home;
