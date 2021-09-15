import React from 'react'
import { Route, Switch } from 'react-router'
import AdminSidebar from './AdminSidebar'
import JobOfferEdit from "./AdminPages/JobOfferEdit"
import JobOfferNew from "./AdminPages/JobOfferNew"
import JobOffersIndex from "./AdminPages/JobOffersIndex"
import Settings from './AdminPages/Settings'
import AdminHome from './AdminPages/AdminHome'

const AppAdmin = () => {
  return (
    <React.Fragment>
      <AdminSidebar className="d-flex flex-column p-3 bg-dark text-white col-xl-2" />
      <Switch>
        <Route path="/admin/job-offers/:offerId/edit" component={JobOfferEdit} />
        <Route path="/admin/job-offers/new" component={JobOfferNew} />
        <Route path="/admin/job-offers" component={JobOffersIndex} />
        <Route path="/admin/settings" component={Settings} />
        <Route path="/admin" component={AdminHome}/>
        {/* <Router path="*" component={ Error404 } /> */}
      </Switch>
    </React.Fragment>
  )
}

export default AppAdmin
