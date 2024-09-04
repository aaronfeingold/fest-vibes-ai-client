import React from "react";
import { useSelector, shallowEqual } from "react-redux";

const Spinner = () => {
  const { apiStatus } = useSelector((state) => state.aes, shallowEqual);
  if (apiStatus === "loading") {
    return (
      <div className="text-center">
        <div
          className="spinner-border"
          role="status"
          style={{ marginTop: 50, marginBottom: 50 }}
        >
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }
};

export default Spinner;
