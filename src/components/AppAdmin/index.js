import React from 'react'
import { Route, Switch } from 'react-router'
import AdminSidebar from './AdminSidebar'
import JobOffersIndex from "./AdminPages/JobOffersIndex"
import JobOfferEdit from "./AdminPages/JobOfferEdit"
import JobOfferNew from "./AdminPages/JobOfferNew"

const AppAdmin = () => {
  return (
    <React.Fragment>
      <AdminSidebar className="d-flex flex-column p-3 bg-dark text-white col-xl-2" />
      <div className="p-3 col-xl-10">
        <Switch>
          <Route path="/admin/job-offers/:jobId/edit" component={ JobOfferEdit } />
          <Route path="/admin/job-offers/new" component={ JobOfferNew } />
          <Route path="/admin/job-offers" component={ JobOffersIndex } />
          {/* <Router path="/settings" component={ AppSettings } /> */}
          <Route path="/admin">
          <h2>Dashboard</h2>
          </Route>
          {/* <Router path="*" component={ Error404 } /> */}
        </Switch>
      </div>
    </React.Fragment>
  )
}

export default AppAdmin
