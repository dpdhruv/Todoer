import React from 'react';
import {isLoggedIn} from './isAuth';
import {Route,Redirect} from 'react-router-dom';

const PrivateRoute = ({component:Component,...rest}) => {
  return (
    <Route {...rest} render={
      props=>(
        isLoggedIn()?
        <Component {...props}/>
        :
        <Redirect to="/"/>
      )
    }/>
  )
}

export default PrivateRoute
