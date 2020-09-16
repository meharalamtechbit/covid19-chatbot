import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Dashboard } from '../../../app/modules/dashboard';

const homeRoutes = () => (
  <React.Fragment>
    <Switch>
      <Route exact path='/dashboard' component={Dashboard} />
      <Redirect to={{ pathname: '/dashboard' }} />
    </Switch>
  </React.Fragment>
);

export default homeRoutes;
