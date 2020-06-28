import React from 'react';
import styled from 'styled-components';

const StyledSpiner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;

  & > div {
    background-color: #71a394;
    height: 100%;
    width: 6px;
    display: inline-block;
    margin: 0 3px 0 0;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  & .rect2 {
    animation-delay: -1.1s;
  }

  & .rect3 {
    animation-delay: -1s;
  }

  & .rect4 {
    animation-delay: -0.9s;
  }

  & .rect5 {
    animation-delay: -0.8s;
  }

  @keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
    }
  }
`;

export const Spiner = () => {
  return (
    <StyledSpiner>
      <div className="rect1" />
      <div className="rect2" />
      <div className="rect3" />
      <div className="rect4" />
      <div className="rect5" />
    </StyledSpiner>
  );
};
