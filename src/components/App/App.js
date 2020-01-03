import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage } from '../HomePage';
import { RegistrationPage } from '../RegistrationPage';
import { NotFoundPage } from '../NotFoundPage';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={RegistrationPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};
