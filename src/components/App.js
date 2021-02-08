import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '../App.css';

import LandingPage from'./LandingPage'
import CompanyDetailsView from './CompanyDetailsView'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/job/:id">
            <CompanyDetailsView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
