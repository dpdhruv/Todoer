import React from 'react';
import {isLoggedIn} from './isAuth';
import {Route,Redirect} from 'react-router-dom';

const PrivateRoute = ({component:Component,restricted,...rest}) => {
  return (
    <Route {...rest} render={
      props=>(
        isLoggedIn() && restricted?
        <Redirect to="/dashboard"/>
        :
        <Component {...props}/>
      )
    }/>
  )
}

export default PrivateRoute
