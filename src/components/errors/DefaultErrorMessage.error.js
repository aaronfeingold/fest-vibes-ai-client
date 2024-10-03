import React from "react";
import styles from "./DefaultErrorMessage.error.module.css";

const DefaultErrorMessage = ({ error }) => {
  let msg;

  if (error.message) {
    msg = error.message;
  } else {
    msg = error;
  }

  return <span className={styles.errorMessage}>{msg}</span>;
};

export default DefaultErrorMessage;
