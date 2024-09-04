import React from "react";
import Header from "../components/Header.component";
import About from "../components/About.component";
import Spinner from "../components/Spinner.component";
import styles from "./HeroSection.container.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.parallax}>
        <div className="container text-center text-black">
          <h1 className="display-4 fw-bold">
            <Header />
          </h1>
          <div className="col-lg-6 mx-auto">
            <About />
            <Spinner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
