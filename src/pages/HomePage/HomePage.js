import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import Link from '../../shared/StyledLink';
import Section from '../../shared/StyledSection';

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #71a394;
`;

const H1 = styled.h1`
  margin: 10px 0px;
  color: #ecf0f1;
  font-size: 2em;
`;

const H2 = styled.h2`
  margin: 20px 0;
  color: #ecf0f1;
  font-size: 1.5em;
`;

export class HomePage extends PureComponent {
  render() {
    return (
      <StyledSection>
        <Helmet>
          <title>Online scheduling</title>
        </Helmet>
        <H1>Simple online scheduling for your team</H1>
        <H2>
          Eliminates back and forth emails. Customer bookings straight into your
          calendar.
        </H2>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register" primary>
            Get started for FREE
          </Link>
        </div>
      </StyledSection>
    );
  }
}
