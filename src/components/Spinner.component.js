import React from "react";
import { Audio } from "react-loader-spinner";
import styles from "./Spinner.component.module.css";

const Spinner = () => (
  <div
    className={`row justify-content-center text-center ${styles.spinnerContainer}`}
  >
    <Audio
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />
  </div>
);

export default Spinner;
