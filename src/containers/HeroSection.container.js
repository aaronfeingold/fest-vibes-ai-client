import React, { useMemo, useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import Header from "../components/Header.component";
import Spinner from "../components/Spinner.component";
import styles from "./HeroSection.container.module.css";
import useScroll from "../hooks/useScroll";

const MINIMUM_LOADING_TIME = 3000;

const HeroSection = () => {
  const { apiStatus } = useSelector((state) => state.aes, shallowEqual);
  const [spinnerVisible, setSpinnerVisible] = useState(false);
  const { scrollToEvents } = useScroll();

  useEffect(() => {
    let timeoutId;

    if (apiStatus === "loading") {
      setSpinnerVisible(true);
      timeoutId = setTimeout(() => {
        setSpinnerVisible(false);
      }, MINIMUM_LOADING_TIME);
    } else {
      // Hide spinner if not loading
      setSpinnerVisible(false);
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
    <div className={styles.heroSection} onWheel={handleWheel}>
      <div className={styles.parallax}>
        <div className="container text-center text-black">{header}</div>
      </div>
    </div>
  );
};

export default HeroSection;
