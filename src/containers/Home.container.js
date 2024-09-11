import React, { createContext, useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchArtistEvents } from "../services/ArtistEvents.service";
import ArtistEvents from "./ArtistEvents.container";
import HeroSection from "./HeroSection.container";

const MINIMUM_LOADING_TIME = 3000;

export const SpinnerContext = createContext();

const Home = () => {
  const dispatch = useDispatch();
  const [spinnerVisible, setSpinnerVisible] = useState(true);
  const { apiStatus } = useSelector((state) => state.aes, shallowEqual);
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
    <SpinnerContext.Provider value={{ spinnerVisible, setSpinnerVisible }}>
      <div id="homeContainer">
        <HeroSection />
        <ArtistEvents />
      </div>
    </SpinnerContext.Provider>
  );
};

export default Home;
