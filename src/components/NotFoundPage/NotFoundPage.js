import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import Section from '../../shared/StyledSection';

const StyledSection = styled(Section)`
  padding: 50px;
  background-color: #71a394;
  color: #ffffff;
  font-size: 1.8em;
`;

export class NotFoundPage extends PureComponent {
  render() {
    return (
      <StyledSection>
        <Helmet>
          <title>YouCanBook.me</title>
        </Helmet>
        <h3>Page not found</h3>
        <h3>404</h3>
      </StyledSection>
    );
  }
}
