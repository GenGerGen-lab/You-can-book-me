import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './containers/Home';
import { Registration } from './containers/Registration';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Registration} />
        <Route path="/" render={() => <p>404</p>} />
      </Switch>
    </Router>
  );
};
