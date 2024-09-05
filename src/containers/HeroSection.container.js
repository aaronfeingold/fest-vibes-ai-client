import React, { useMemo, useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import Header from "../components/Header.component";
import Spinner from "../components/Spinner.component";
import styles from "./HeroSection.container.module.css";

const MINIMUM_LOADING_TIME = 3000;

const HeroSection = ({ scrollToEvents }) => {
  const { apiStatus } = useSelector((state) => state.aes, shallowEqual);
  const [spinnerVisible, setSpinnerVisible] = useState(false);
  const [spinnerTimeout, setSpinnerTimeout] = useState(null);
  // Effect to manage spinner visibility based on API status
  useEffect(() => {
    if (apiStatus === "loading") {
      setSpinnerVisible(true);
      // Clear any existing timeout
      if (spinnerTimeout) {
        clearTimeout(spinnerTimeout);
      }
      // Set a new timeout to hide the spinner after the minimum duration
      const timeoutId = setTimeout(() => {
        setSpinnerVisible(false);
      }, MINIMUM_LOADING_TIME);
      setSpinnerTimeout(timeoutId);
    }
  }, [
    apiStatus,
    spinnerVisible,
    spinnerTimeout,
    setSpinnerVisible,
    setSpinnerTimeout,
  ]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        console.log("foobar");
        scrollToEvents(); // Trigger scroll to ArtistEvents when scrolling down
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollToEvents]);

  const header = useMemo(() => {
    return (
      <h1 className="display-4 fw-bold">
        {spinnerVisible ? <Spinner /> : <Header />}
      </h1>
    );
  }, [spinnerVisible]);

  return (
    <div className={styles.heroSection}>
      <div className={styles.parallax}>
        <div className="container text-center text-black">{header}</div>
      </div>
    </div>
  );
};

export default HeroSection;
