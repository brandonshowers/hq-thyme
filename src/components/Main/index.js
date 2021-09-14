import React from 'react'
import { Route, Switch } from 'react-router'
import JobOffer from "./JobOffer"

const Main = () => {
  return (
    <Switch>
      <Route path="/jobs" component={ JobOffer } />
    </Switch>
  )
}

export default Main
