import React, { useEffect, useRef } from "react";
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
  const artistEventsRef = useRef(null);

  useEffect(() => {
    dispatch(fetchArtistEvents());
  }, [dispatch]);

  // Function to scroll to the artist events section
  const scrollToEvents = () => {
    if (artistEventsRef.current) {
      console.log("barfoo");
      artistEventsRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scroll effect
      });
    }
  };

  return (
    <>
      <Navbar filterStatus={filterStatus} />
      <HeroSection scrollToEvents={scrollToEvents} />
      <div ref={artistEventsRef}>
        <ArtistEvents
          filterStatus={filterStatus}
          query={query}
          apiStatus={query}
        />
      </div>
    </>
  );
};

export default Home;
