import React from 'react';
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

// Get the DOM element to render the app
const container = document.getElementById("root");

// Ensure the container is not null
if (container) {
  // Create the root
  const root = createRoot(container);

  // Render the app
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error("Root container not found");
}

