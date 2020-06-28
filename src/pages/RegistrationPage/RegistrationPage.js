import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import { AppHeader } from '../../components/AppHeader';
import { FormSeparator } from '../../components/FormSeparator';
import { Spiner } from '../../components/Spiner';

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
import IconEnvelop from '../../assets/images/envelope.png';
import IconRecomend from '../../assets/images/recomendAuth.png';

const StyledSection = styled(Section)`
  background-color: #f6f9fb;
`;

const StyledCenterSection = styled(StyledSection)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100% - 60px);
`;

const H2 = styled.h2`
  margin: 0 0 20px 0;
`;

const StyledImg = styled.img`
  margin: 20px 0;
`;

const StyledP = styled.p`
  text-align: center;
  line-height: 1.5;
  color: #444;
`;

const StyledGoogleLink = styled(StyledButtonLink)`
  margin-top: 70px;
  &:before {
    content: '';
    position: absolute;
    top: -40px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: url(${IconRecomend}) left center no-repeat transparent;
    background-size: 30%;
  }
`;

export class RegistrationPage extends PureComponent {
  state = {
    value: '',
    isFormVisible: false,
    isEmailPosted: false,
    isEmailPosting: false
  };

  onEmailChange = evt => {
    this.setState({ value: evt.target.value });
  };

  onEmailOpen = () => {
    this.setState({
      isFormVisible: true
    });
  };

  onEmailSubmit = async evt => {
    evt.preventDefault();

    const data = { value: this.state.value };

    this.setState({
      isEmailPosting: true
    });

    await fetch('/createAccount', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    this.setState({
      isEmailPosted: true
    });
  };

  render() {
    return (
      <StyledSection>
        <Helmet>
          <title>YouCanBook.me</title>
        </Helmet>
        <AppHeader />
        {!this.state.isEmailPosted ? (
          <div>
            {!this.state.isEmailPosting ? (
              <Fieldset>
                <H2>Create your account</H2>
                <StyledGoogleLink href="/api/auth/google">
                  <Img src={IconGoogle} width="20px" alt="Иконка" />
                  Sign up with Google
                </StyledGoogleLink>
                <FormSeparator />

                {this.state.isFormVisible ? (
                  <form
                    action="register"
                    method="POST"
                    onSubmit={this.onEmailSubmit}
                  >
                    <StyledInput
                      type="email"
                      onChange={this.onEmailChange}
                      placeholder="email@example.com"
                      value={this.state.value}
                      required
                    />
                    <StyledButton type="submit">Sign up</StyledButton>
                  </form>
                ) : (
                  <StyledButton onClick={this.onEmailOpen}>
                    <Img src={IconEmail} width="20px" alt="Icon" />
                    Sign up with Email
                  </StyledButton>
                )}
              </Fieldset>
            ) : (
              <Spiner />
            )}
          </div>
        ) : (
          <StyledCenterSection>
            <StyledImg src={IconEnvelop} alt="Icon" />
            <h2>You&apos;ve got mail</h2>
            <StyledP>
              To complete your registration with YouCanBook.me, please
              <br />
              check your email and follow the link.
            </StyledP>
          </StyledCenterSection>
        )}
      </StyledSection>
    );
  }
}
