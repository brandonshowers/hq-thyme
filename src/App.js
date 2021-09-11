import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import AppSidebar from "./components/AppSidebar";

function App() {
  return (
    <Router>
      <AppSidebar className="d-flex flex-column p-3 bg-dark text-white" />
      <div className="p-3">
        <Switch>
          <Route path="/job-offers">
            <h2>Job Offers</h2>
          </Route>
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
