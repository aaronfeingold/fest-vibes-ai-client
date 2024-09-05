import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchArtistEvents } from "../services/ArtistEvents.service";
import ArtistEvents from "./ArtistEvents.container";
import HeroSection from "./HeroSection.container";
import Navbar from "../components/Navbar.component";

const Home = () => {
  const dispatch = useDispatch();
  const { filterStatus, query } = useSelector(
    (state) => state.aes,
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchArtistEvents());
  }, [dispatch]);

  return (
    <>
      <Navbar filterStatus={filterStatus} />
      <HeroSection />
      <ArtistEvents
        filterStatus={filterStatus}
        query={query}
        apiStatus={query}
      />
    </>
  );
};

export default Home;
