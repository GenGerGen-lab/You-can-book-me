import React, { Component } from 'react';
import styled from 'styled-components';

const CheckBoxInput = styled.input`
  top: 0;
  left: 0;
  width: 100%;
  cursor: pointer;
  height: 100%;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
`;

const CheckBoxContainer = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20%;
  transition: ease 0.1s;
  &.focus {
    box-shadow: inset 0px 0px 4px 4px rgba(76, 166, 223, 0.4);
  }
`;

const CheckBoxRoot = styled.span`
  color: #71a394;
  padding: 9px;
  border: 0;
  left: -10px;
  margin-right: -10px;
  flex: 0 0 auto;
  overflow: visible;
  font-size: 1.5em;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  cursor: pointer;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  transform: rotateZ(-90deg);
  transition: linear 0.1s;
  &.focus {
    transform: rotateZ(0deg);
  }
`;

const StyledSvg = styled.svg`
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1em;
  flex-shrink: 0;
  user-select: none;
`;

export class CheckBox extends Component {
  state = {
    isInputFocus: false
  };

  onInputClick = () => {
    this.setState(state => ({
      isInputFocus: !state.isInputFocus
    }));
  };

  render() {
    return (
      <>
        {this.state.isInputFocus ? (
          <CheckBoxRoot className="focus">
            <CheckBoxContainer className="focus">
              <CheckBoxInput type="checkbox" onClick={this.onInputClick} />
              <StyledSvg
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="presentation"
              >
                <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </StyledSvg>
            </CheckBoxContainer>
          </CheckBoxRoot>
        ) : (
          <CheckBoxRoot>
            <CheckBoxContainer>
              <CheckBoxInput type="checkbox" onClick={this.onInputClick} />
              <StyledSvg
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="presentation"
              >
                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
              </StyledSvg>
            </CheckBoxContainer>
          </CheckBoxRoot>
        )}
      </>
    );
  }
}
