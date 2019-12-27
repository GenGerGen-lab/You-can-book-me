import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo.png';

export const Header = () => {
  const stylesHeader = {
    width: '100vw',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#71a394'
  };

  const styles = {
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <header style={stylesHeader}>
      <Link to="/" style={styles}>
        <img src={Logo} alt="Логотип" width="180px" />
      </Link>
    </header>
  );
};
