import React from "react";
import PropTypes from 'prop-types';
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

DefaultErrorMessage.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultErrorMessage;
