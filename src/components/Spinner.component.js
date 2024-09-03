import React from "react";

const Spinner = () => (
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

export default Spinner;
