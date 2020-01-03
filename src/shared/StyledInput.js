import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  display: block;
  margin: 15px 0;
  border-radius: 4px;
  border: 1.5px solid ${props => (props.invalid ? '#dc3545' : '#d7d7d7')};
  background-color: ${props => (props.invalid ? '#ffe9e9' : '#ffffff')};
  color: #333;
  font-size: 1em;
  font-weight: 300;
  box-shadow: none;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: ${props => (props.invalid ? '#dc3545' : '#70a394')};
  }
`;

export default StyledInput;
