import React from 'react';

import { StyledLink } from './StyledLink';

export const Home = () => {
  const styles = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#71A394'
  };

  const stylesHeader = {
    display: 'block',
    margin: '30px 0px',
    color: '#ecf0f1',
    fontSize: '2em'
  };

  return (
    <section style={styles}>
      <h1 style={stylesHeader}>
        Простое онлайн планирование для вашей команды
      </h1>
      <div>
        <StyledLink href="/login">Войти в систему</StyledLink>
        <StyledLink href="/" primary>
          Зарегистрироваться
        </StyledLink>
      </div>
    </section>
  );
};
