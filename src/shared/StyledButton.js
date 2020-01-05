import styled from 'styled-components';

const CustomStyles = `
  width: 100%;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #e5e5e5;
  font-size: 16px;
  color: #494949;
  border-radius: 4px;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    filter: brightness(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 5px rgba(159, 207, 252, 0.5);
  }
`;

const StyledButton = styled.button`
  ${CustomStyles}
`;

export const StyledButtonLink = styled.a`
  text-decoration: none;
  ${CustomStyles}
`;

export default StyledButton;
