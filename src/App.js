import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ArtistEventsContainer from './containers/ArtistEvents.container'

const App = () =>(
  <Router>
    <Route path="/" component={ArtistEventsContainer} />
  </Router>
)

export default App;
