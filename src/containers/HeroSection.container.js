import React, { useMemo, useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import Header from "../components/Header.component";
import Spinner from "../components/Spinner.component";
import styles from "./HeroSection.container.module.css";
import useScroll from "../hooks/useScroll";

const MINIMUM_LOADING_TIME = 3000;

const HeroSection = () => {
  const { apiStatus } = useSelector((state) => state.aes, shallowEqual);
  const [spinnerVisible, setSpinnerVisible] = useState(true);
  const { scrollToEvents } = useScroll();
  const startTime = useMemo(() => Date.now(), []);

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
  }, [apiStatus]);

  const header = useMemo(() => {
    return (
      <h1 className="display-4 fw-bold">
        {spinnerVisible ? <Spinner /> : <Header />}
      </h1>
    );
  }, [spinnerVisible]);

  // Handle the mouse wheel event
  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      scrollToEvents(); // Trigger scroll to the ArtistEvents section when the user scrolls down
    }
  };

  return (
    <div id="home" className={styles.heroSection} onWheel={handleWheel}>
      <div className={styles.parallax}>
        <div className="container text-center text-black">{header}</div>
      </div>
    </div>
  );
};

export default HeroSection;
