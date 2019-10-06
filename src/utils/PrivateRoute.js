import React from 'react';
import Layout from '../layout/desktop';
import {isLoggedIn} from './isAuth';
import {Route,Redirect} from 'react-router-dom';

const PrivateRoute = ({component:Component,...rest}) => {
  console.log('private route')
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
