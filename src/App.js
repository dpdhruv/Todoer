import React from 'react';
import './App.scss';
import { BrowserRouter , Route } from 'react-router-dom';
import auth from './pages/auth';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={auth}></Route>
    </BrowserRouter>
  );
}

export default App;
