import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import { AppHeader } from '../../components/AppHeader';
import { FormSeparator } from '../../components/FormSeparator';

import Img from '../../shared/StyledButtonImage';
import Fieldset from '../../shared/StyledFieldset';
import Section from '../../shared/StyledSection';
import {
  StyledButton,
  StyledButtonLink,
  StyledInput
} from '../../shared/StyledActiveElements';

import IconGoogle from '../../assets/images/iconGoogle.png';
import IconEmail from '../../assets/images/iconEmail.png';

const StyledSection = styled(Section)`
  background-color: #f6f9fb;
`;

const H2 = styled.h2`
  margin: 0 0 20px 0;
`;

export class LoginPage extends PureComponent {
  onEmailSubmit = async evt => {
    evt.preventDefault();
    const response = await fetch('/user', { method: 'GET' });
    const result = await response.json();
    console.log(result);
  };

  render() {
    return (
      <StyledSection>
        <Helmet>
          <title>YouCanBook.me</title>
        </Helmet>
        <AppHeader />
        <Fieldset>
          <H2>Log in to your account</H2>
          <StyledButtonLink href="/api/auth/google">
            <Img src={IconGoogle} width="20px" alt="Иконка" />
            Login with Google
          </StyledButtonLink>
          <FormSeparator />
          <form action="register" method="POST" onSubmit={this.onEmailSubmit}>
            <StyledInput type="text" placeholder="email@example.com" />
            <StyledButton type="submit">Login</StyledButton>
          </form>
        </Fieldset>
      </StyledSection>
    );
  }
}
