import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './containers/Home';
import { Registration } from './containers/Registration';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Registration} />
        <Route path="/" render={() => <p>404</p>} />
      </Switch>
    </BrowserRouter>
  );
};
