import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import auth from './pages/auth';
import dashboard from './pages/dashboard';

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={auth}></Route>
      <Route exact path='/dashboard' component={dashboard}></Route> 
    </React.Fragment>
  );
}

export default App;
