import React, { useEffect, useRef, useState } from "react";
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
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    dispatch(fetchArtistEvents());
  }, [dispatch]);

  const handleScroll = (event) => {
    if (scrollContainerRef.current) {
      const nextSection = scrollContainerRef.current.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className="container-lg"
      onWheel={handleScroll}
      ref={scrollContainerRef}
    >
      <div className={styles.stickyNavbar}>
        <Navbar filterStatus={filterStatus} />
      </div>
      <HeroSection />
      <ArtistEvents
        filterStatus={filterStatus}
        query={query}
        apiStatus={query}
      />
    </div>
  );
};

export default Home;
