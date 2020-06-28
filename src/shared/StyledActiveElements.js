import styled from 'styled-components';

const CustomStyles = `
  width: 100%;
  height: 40px;
  position: relative;
  font-size: 1em;
  font-family: MontSerrat;
  font-weight: 300;
  border-radius: 4px;
  color: #333333;
  box-shadow: none;
  box-sizing: border-box;
  outline: none;
  border: none;
  background-color: #e5e5e5;
  margin: 10px 0;
`;

export const StyledInput = styled.input`
  ${CustomStyles}
  display: block;
  box-sizing: border-box;
  padding: 0 10px;
  border: 1.2px solid ${props => (props.invalid ? '#dc3545' : '#d7d7d7')};
  background-color: ${props => (props.invalid ? '#ffe9e9' : '#ffffff')};

  &:focus {
    border-color: ${props => (props.invalid ? '#dc3545' : '#70a394')};
  }
`;

export const StyledButton = styled.button`
  ${CustomStyles}
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.primary {
    background-color: #317297;
    color: #ffffff;
  }

  &:hover {
    filter: brightness(0.95);
  }

  &:focus {
    box-shadow: 0px 0px 0px 5px rgba(159, 207, 252, 0.5);
  }
`;

export const StyledButtonLink = styled.a`
  ${CustomStyles}
  text-decoration: none;
  display: block;
  width: 100%;
  padding: 10px 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    filter: brightness(0.95);
  }

  &:focus {
    box-shadow: 0px 0px 0px 5px rgba(159, 207, 252, 0.5);
  }
`;
