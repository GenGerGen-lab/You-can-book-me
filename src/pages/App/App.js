import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage } from '../HomePage';
import { RegistrationPage } from '../RegistrationPage';
import { LoginPage } from '../LoginPage';
import { NotFoundPage } from '../NotFoundPage';
import { WaitingEmailVerificationPage } from '../WaitingEmailVerificationPage';

export const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/register" component={RegistrationPage} />
          <Route path="/login" component={LoginPage} />
          <Route
            path="/createAccount"
            component={WaitingEmailVerificationPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </HelmetProvider>
  );
};
