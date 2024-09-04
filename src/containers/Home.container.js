import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchArtistEvents } from "../services/ArtistEvents.service";
import ArtistEvents from "./ArtistEvents.container";
import HeroSection from "./HeroSection.container";
import Navbar from "../components/Navbar.component";
import styles from "./Home.container.module.css";

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
      <div className={styles.stickyNavbar}>
        <Navbar filterStatus={filterStatus} />
      </div>
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
