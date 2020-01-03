import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(({ primary, logo, ...props }) => <Link {...props} />)`
  width: auto;
  max-width: 250px;
  border: 2px solid ${props => (props.primary ? '#ef5858' : '#ecf0f1')};
  border-radius: 3px;
  display: inline-block;
  text-overflow: ellipsis;
  padding: 10px 15px;
  margin: 0 10px;
  background-color: ${props => (props.primary ? '#ef5858' : 'transparent')};
  font-size: 1.225em;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  color: #ecf0f1;

  &:hover {
    border-color: ${props => (props.primary ? 'ef4141' : 'ecf0f1')};
    background-color: ${props =>
      props.primary ? '#ef4141' : 'rgba(255, 255, 255, 0.1)'};
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 5px rgba(159, 207, 252, 0.3);
  }
`;

export default StyledLink;
