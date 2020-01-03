import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { AppHeader } from '../AppHeader';
import Fieldset from '../../shared/StyledFieldset';
import Input from '../../shared/StyledInput';
import Section from '../../shared/StyledSection';
import Button from '../../shared/StyledButton';
import Img from '../../shared/StyledButtonImage';

import IconGoogle from '../../images/iconGoogle.png';

const StyledSection = styled(Section)`
  background-color: #f6f9fb;
`;

const H2 = styled.h2`
  margin: 0 0 20px 0;
`;

export class RegistrationPage extends PureComponent {
  render() {
    return (
      <StyledSection>
        <Helmet>
          <title>YouCanBook.me</title>
        </Helmet>
        <AppHeader />
        <Fieldset>
          <H2>Create your account</H2>
          <form action="/register" method="POST">
            <Input type="email" placeholder="email@example.com" />

            <Button>
              <Img src={IconGoogle} width="20px" alt="Иконка" />
              Sign up with Google
            </Button>
          </form>
        </Fieldset>
      </StyledSection>
    );
  }
}
