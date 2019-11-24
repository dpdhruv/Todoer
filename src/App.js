import React from "react";
import "./App.scss";
import { BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";

import auth from "./pages/auth";
import Dashboard from "./pages/dashboard";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={auth} path="/" exact />
          <PrivateRoute component={Dashboard} path="/dashboard" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
