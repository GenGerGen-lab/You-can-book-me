import styled from 'styled-components';

export const StyledSeparatorWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSeparatorLine = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #ededed;
`;

export const StyledSeparatorContent = styled.p`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 0.7em;
  color: #333;
  background-color: #ebebeb;
  text-transform: uppercase;
  z-index: 2;
`;
