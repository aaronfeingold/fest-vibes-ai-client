import React, { createContext, useEffect, useState, useMemo } from "react";
import { Element } from "react-scroll";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchArtistEvents } from "../services/ArtistEvents.service";
import ArtistEvents from "./ArtistEvents.container";
import HeroSection from "./HeroSection.container";

const MINIMUM_LOADING_TIME = 3500;
const FADE_OUT_DURATION = 500;

export const SpinnerContext = createContext();

const Home = () => {
  const dispatch = useDispatch();
  const [spinnerVisible, setSpinnerVisible] = useState(true);
  const [startFadeOut, setStartFadeOut] = useState(false);
  const { apiStatus, error } = useSelector((state) => state.aes, shallowEqual);
  const startTime = useMemo(() => Date.now(), []);

  useEffect(() => {
    dispatch(fetchArtistEvents());
  }, [dispatch]);

  useEffect(() => {
    let timeoutId;
    let fadeOutTimeoutId;

    if (apiStatus === "succeeded" || apiStatus === "failed") {
      // Wait for the minimum loading time before hiding the spinner
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MINIMUM_LOADING_TIME - elapsedTime);

      // Start the fade out a half second before spinner is no longer visible
      fadeOutTimeoutId = setTimeout(() => {
        setStartFadeOut(true);
      }, remainingTime - FADE_OUT_DURATION);

      // Hide the spinner completely
      timeoutId = setTimeout(() => {
        setSpinnerVisible(false);
      }, remainingTime);
    }

    // Cleanup function to clear the timeout if component unmounts
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (fadeOutTimeoutId) clearTimeout(fadeOutTimeoutId);
    };
  }, [apiStatus, startTime]);

  return (
    <SpinnerContext.Provider
      value={{ spinnerVisible, startFadeOut, apiStatus, error }}
    >
      <Element name="homeContainer">
        <div
          id="homeContainer"
          style={{ backgroundColor: "#f4f4f4", overflow: "hidden" }}
        >
          <HeroSection />
          <ArtistEvents />
        </div>
      </Element>
    </SpinnerContext.Provider>
  );
};

export default Home;
