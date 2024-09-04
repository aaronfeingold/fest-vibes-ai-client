import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Audio } from "react-loader-spinner";

const Spinner = () => {
  const { apiStatus } = useSelector((state) => state.aes, shallowEqual);
  if (apiStatus === "loading") {
    return (
      <Audio
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    );
  }
};

export default Spinner;
