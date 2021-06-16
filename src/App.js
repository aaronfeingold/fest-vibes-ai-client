import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ArtistEvents from './containers/ArtistEvents.container'

const App = () =>(
  <Router>
    <Route path="/" component={ArtistEvents} />
  </Router>
)

export default App;
