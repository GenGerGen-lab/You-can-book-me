import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo.png';
import Header from '../../shared/StyledHeader';

export const AppHeader = () => {
  return (
    <Header>
      <Link to="/">
        <img src={Logo} alt="Логотип" width="180px" />
      </Link>
    </Header>
  );
};
