import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import AppSidebar from "./components/AppSidebar";
import JobOffers from "./components/JobOffers";
import JobOffersEdit from './components/JobOffers/edit.js';
import JobOffersNew from './components/JobOffers/new.js';

function App() {
  return (
    <Router>
      <AppSidebar className="d-flex flex-column p-3 bg-dark text-white col-xl-2" />
      <div className="p-3 col-xl-10">
        <Switch>
          <Route path="/job-offers/:jobId/edit" component={ JobOffersEdit } />
          <Route path="/job-offers/new" component={ JobOffersNew } />
          <Route path="/job-offers" component={ JobOffers } />
          {/* <Router path="/settings" component={ AppSettings } /> */}
          <Route path="/">
            <h2>Dashboard</h2>
          </Route>
          {/* <Router path="*" component={ Error404 } /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
