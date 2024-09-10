import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Home from "./containers/Home.container";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
