import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import JobOffer from "./JobOffer"

const Main = () => {
  return (
    <Switch>
      <Route path="/jobs/:offerId" component={ JobOffer } />
      <Route path="/">
        <div className="container-fluid align-items-center text-center">
          <h1>Welcome to hq:thyme</h1>
          <Link to="/admin">Log In</Link>
        </div>
      </Route>
    </Switch>
  )
}

export default Main
