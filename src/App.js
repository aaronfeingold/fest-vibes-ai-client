import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddPost from './containers/AddPost'

const App = () =>(
  <Router>
    <Route path="/" component={AddPost} />
  </Router>
)

export default App;
