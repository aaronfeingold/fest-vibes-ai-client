import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import ArtistEventsContainer from './containers/ArtistEvents.container'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ArtistEventsContainer />} />
    </Routes>
  </Router>
);

export default App;
