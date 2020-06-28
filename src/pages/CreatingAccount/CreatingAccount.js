import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import { AppHeader } from '../../components/AppHeader';
import { CheckBox } from '../../components/CheckBox';

import Fieldset from '../../shared/StyledFieldset';
import Section from '../../shared/StyledSection';
import { StyledInput } from '../../shared/StyledActiveElements';

const StyledSection = styled(Section)`
  background-color: #f6f9fb;
`;

const H2 = styled.h2`
  margin: 0 0 25px 0;
`;

const StyledP = styled.p`
  text-align: center;
  line-height: 1.5;
  margin-top: -15px;
  font-size: 0.9em;
  color: #555;
`;

const StyledFieldset = styled(Fieldset)`
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-top: 25px;
`;

const StyledForm = styled.form`
  text-align: left;
  margin-top: 30px;
  line-height: 0.5;
`;

export class CreatingAccount extends PureComponent {
  render() {
    return (
      <StyledSection>
        <Helmet>
          <title>YouCanBook.me</title>
        </Helmet>
        <AppHeader />
        <StyledFieldset>
          <H2>Welcome</H2>
          <StyledP>
            You&apos;re about to set up a new YouCanBook.me account
          </StyledP>
          <StyledForm
            action="register"
            method="POST"
            onSubmit={this.onEmailSubmit}
          >
            <StyledLabel>
              First Name
              <StyledInput type="text" required />
            </StyledLabel>
            <StyledLabel>
              Last Name
              <StyledInput type="text" required />
            </StyledLabel>
            <StyledLabel>
              Choose Password
              <StyledInput type="password" required />
            </StyledLabel>
            <StyledLabel style={{ display: 'flex', alignItems: 'center' }}>
              <CheckBox />
              {'I agree to \u00a0'}
              <a href="/" style={{ color: '#3187c8' }}>
                YouCanBook.me terms
              </a>
            </StyledLabel>
          </StyledForm>
        </StyledFieldset>
      </StyledSection>
    );
  }
}
