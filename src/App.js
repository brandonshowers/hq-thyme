import React from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import AppAdmin from "./components/AppAdmin";
import Main from "./components/Main";

function App() {
  return (
    <Switch>
      <Route path="/admin" component={ AppAdmin } />
      <Route path="/" component={ Main } />
    </Switch>
  );
}

export default App;
