import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font: inherit;
  background: ${props => props.bgcolor ? props.bgcolor : '#4f005f'};
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;
  color: greenyellow;
  &:focus {
    outline: none;
  }
`;

const Button = (props) => {
  return (
    <StyledButton  bgcolor = {props.bgcolor}type={props.type || "button"} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
