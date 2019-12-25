import styled from 'styled-components';

export const StyledLink = styled.a`
  display: inline-block;
  width: auto;
  max-width: 250px;
  padding: 10px 15px;
  margin: 0 10px;
  background-color: ${props => (props.primary ? '#EF5858' : 'transparent')};
  border: 2px solid ${props => (props.primary ? '#EF5858' : '#ecf0f1')};
  border-radius: 3px;
  font-size: 1.225em;
  font-weight: 700;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #ecf0f1;
  :hover {
    background-color: ${props =>
      props.primary ? '#ED4141' : 'rgba(255, 255, 255, 0.1)'};
    border: 2px solid ${props => (props.primary ? '#ED4141' : '#ecf0f1')};
  }
  :focus {
    outline: none;
    box-shadow: 0px 0px 0px 5px rgba(159, 207, 252, 0.3);
  }
`;
