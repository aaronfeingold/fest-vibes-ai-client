import React from "react";

const DefaultErrorMessage = ({ error }) => {
  let msg;

  if (error.message) {
    msg = error.message;
  } else {
    msg = error[0].nestedErrors[0].msg;
  }

  return <div className="errorMessage">{msg}</div>;
};

export default DefaultErrorMessage;
