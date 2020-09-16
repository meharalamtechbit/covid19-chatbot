import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './app/pages';

const routes = () => (
  <React.Fragment>
    <Router>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  </React.Fragment>
);

export default routes;
