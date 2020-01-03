import React from 'react';

import { AppHeader } from '../AppHeader';
import Fieldset from '../../shared/StyledFieldset';
import Input from '../../shared/StyledInput';

export const RegistrationPage = () => {
  return (
    <div>
      <AppHeader />
      <Fieldset>
        <h2>Создать аккаунт</h2>
        <form action="/register" method="POST">
          <Input type="text" placeholder="Enter your name" />
          <Input type="email" placeholder="Enter your email" />
          <Input type="password" placeholder="Enter your password" />

          <input type="submit" value="Отправить" />
        </form>
      </Fieldset>
    </div>
  );
};
