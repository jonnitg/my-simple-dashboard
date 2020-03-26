import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'pages/index';
import Login from 'pages/login';

import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path="/login" component={Login} />
      <PrivateRoute path="/" exact={true} component={HomePage} />
    </Switch>
  );
};

export default Routes;
