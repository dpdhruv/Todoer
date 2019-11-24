import React from 'react';
import Layout from '../layout/desktop';
import {isLoggedIn} from './isAuth';
import {Route,Redirect} from 'react-router-dom';

const PrivateRoute = ({component:Component,...rest}) => {
  return (
    <Route {...rest} render={
      props=>(
        isLoggedIn()?
        <Layout>
          <Component {...props}/>
        </Layout>
        :
        <Redirect to="/"/>
      )
    }/>
  )
}

export default PrivateRoute
