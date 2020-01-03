import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import { AppHeader } from '../AppHeader';
import Fieldset from '../../shared/StyledFieldset';
import Input from '../../shared/StyledInput';
import Section from '../../shared/StyledSection';
import Button from '../../shared/StyledButton';
import Img from '../../shared/StyledButtonImage';

import IconGoogle from '../../images/iconGoogle.png';
import IconEmail from '../../images/iconEmail.png';

const StyledSection = styled(Section)`
  background-color: #f6f9fb;
`;

const H2 = styled.h2`
  margin: 0 0 20px 0;
`;

export class RegistrationPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isFormVisible: false
    };
  }

  onEmailClick = () => {
    this.setState({
      isFormVisible: true
    });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    return (
      <StyledSection>
        <Helmet>
          <title>YouCanBook.me</title>
        </Helmet>
        <AppHeader />
        <Fieldset>
          <H2>Create your account</H2>
          <Button>
            <Img src={IconGoogle} width="20px" alt="Иконка" />
            Sign up with Google
          </Button>

          {this.state.isFormVisible ? (
            <form action="register" method="POST" onSubmit={this.onFormSubmit}>
              <Input type="text" placeholder="email@example.com" />
              <Button type="submit">Sign up with Email</Button>
            </form>
          ) : (
            <Button onClick={this.onEmailClick}>
              <Img src={IconEmail} width="20px" alt="Icon" />
              Sign up with Email
            </Button>
          )}
        </Fieldset>
      </StyledSection>
    );
  }
}
