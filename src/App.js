import React from "react";
import "./App.scss";
import { BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import auth from "./pages/auth";
import dashboard from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={false} component={auth} path="/" exact  />    
        <PrivateRoute component={dashboard} path="/dashboard" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
