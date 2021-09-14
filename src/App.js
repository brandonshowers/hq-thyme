import React, { useEffect } from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import AppAdmin from "./components/AppAdmin";
import Main from "./components/Main";
import jobOffersJSON from './database/job-offers.json'

const App = () => {

  useEffect(() => {
    if (!localStorage.getItem("jobOffers")) {
      const jobs = jobOffersJSON.jobOffers;
      localStorage.setItem("jobOffers", JSON.stringify(jobs));
    }
  }, []);

  return (
    <Switch>
      <Route path="/admin" component={ AppAdmin } />
      <Route path="/" component={ Main } />
    </Switch>
  );
}

export default App;
