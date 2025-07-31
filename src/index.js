import React from 'react';
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./store";
import App from "./App";
import Spinner from './components/Spinner.component';

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
} else {
  console.error("Root container not found"); // lol
}

