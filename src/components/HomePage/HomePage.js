import React from 'react';

import Link from '../../shared/StyledLink';
import { H1 } from '../../shared/StyledTextHeaders';
import Section from '../../shared/StyledSection';

export const HomePage = () => {
  return (
    <Section>
      <H1>Простое онлайн планирование для вашей команды</H1>
      <div>
        <Link to="/register">Войти в систему</Link>
        <Link to="/register" primary>
          Зарегистрироваться
        </Link>
      </div>
    </Section>
  );
};
