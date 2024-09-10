import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import useScroll from "../hooks/useScroll";
import { fetchArtistEvents } from "../services/ArtistEvents.service";
import ArtistEvents from "./ArtistEvents.container";
import HeroSection from "./HeroSection.container";
import Navbar from "../components/Navbar.component";

const MINIMUM_LOADING_TIME = 3000;

const Home = () => {
  const dispatch = useDispatch();
  const { scrollToEvents } = useScroll();
  const [spinnerVisible, setSpinnerVisible] = useState(true);
  const { apiStatus, filterStatus, query } = useSelector(
    (state) => state.aes,
    shallowEqual
  );
  const startTime = useMemo(() => Date.now(), []);

  useEffect(() => {
    dispatch(fetchArtistEvents());
  }, [dispatch]);

  useEffect(() => {
    let timeoutId;

    if (apiStatus === "succeeded") {
      // Wait for the minimum loading time before hiding the spinner
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MINIMUM_LOADING_TIME - elapsedTime);

      timeoutId = setTimeout(() => {
        setSpinnerVisible(false);
      }, remainingTime);
    }

    // Cleanup function to clear the timeout if component unmounts
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [apiStatus, startTime]);

  return (
    <>
      <Navbar filterStatus={filterStatus} scrollToEvents={scrollToEvents} />
      <HeroSection
        spinnerVisible={spinnerVisible}
        scrollToEvents={scrollToEvents}
      />
      <ArtistEvents
        spinnerVisible={spinnerVisible}
        filterStatus={filterStatus}
        query={query}
        apiStatus={query}
      />
    </>
  );
};

export default Home;
