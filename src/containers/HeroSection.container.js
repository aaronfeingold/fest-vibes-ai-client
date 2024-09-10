import React, { useMemo } from "react";
import Header from "../components/Header.component";
import Spinner from "../components/Spinner.component";
import styles from "./HeroSection.container.module.css";

const HeroSection = ({ spinnerVisible, scrollToEvents }) => {
  // UX: Hide the spinner after a minimum loading time
  const header = useMemo(() => {
    return (
      <h1 className="display-4 fw-bold">
        {spinnerVisible ? <Spinner /> : <Header />}
      </h1>
    );
  }, [spinnerVisible]);

  // UX: Handle the mouse wheel
  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      scrollToEvents();
    }
  };

  return (
    <div id="home" className={styles.heroSection} onWheel={handleWheel}>
      <div className={styles.parallax}>
        <div className="container-sm text-center text-black">{header}</div>
      </div>
    </div>
  );
};

export default HeroSection;
