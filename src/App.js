import React from "react";
import "./App.scss";
import { BrowserRouter, Switch } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";

import auth from "./pages/auth";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={false} component={auth} path="/" exact />
        <PrivateRoute component={Dashboard} path='/dashboard'/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
