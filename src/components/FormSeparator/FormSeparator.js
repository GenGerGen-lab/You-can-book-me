import React from 'react';

import {
  StyledSeparatorWrapper,
  StyledSeparatorContent,
  StyledSeparatorLine
} from '../../shared/StyledFormSeparator';

export const FormSeparator = () => {
  return (
    <StyledSeparatorWrapper>
      <StyledSeparatorLine />
      <StyledSeparatorContent>or</StyledSeparatorContent>
    </StyledSeparatorWrapper>
  );
};
