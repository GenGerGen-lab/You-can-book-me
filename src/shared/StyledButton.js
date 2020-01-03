import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #e5e5e5;
  font-size: 16px;
  color: #494949;
  border-radius: 4px;
  padding: 20px 0;
  cursor: pointer;

  &:hover {
    filter: brightness(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 5px rgba(159, 207, 252, 0.5);
  }
`;

export default StyledButton;
