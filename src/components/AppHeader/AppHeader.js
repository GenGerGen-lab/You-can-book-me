import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../../images/logo.png';
import Header from '../../shared/StyledHeader';

const StyledLink = styled(({ ...props }) => <Link {...props} />)`
  position: absolute;
  display: flex;
  align-items: center;
  outline: none;
`;

export const AppHeader = () => {
  return (
    <Header>
      <StyledLink to="/">
        <img src={Logo} alt="Логотип" width="180px" />
      </StyledLink>
    </Header>
  );
};
