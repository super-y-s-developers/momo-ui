import React from "react";
import styled from "styled-components";
import FieldWrapper from "./components/FieldWrapper";
import { InputProps } from "./Input";

// TODO: as the appearance is none we need to redo checked status styles
const RadioInput = styled.input`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  padding: 0 !important;
  border-radius: 50% !important;
  cursor: pointer;

  &:checked {
    border-color: ${(props) => props.theme.input.borderColor.focus};
    /* show blue dot */
    & + .radio-control {
      position: absolute;
      left: 5px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.input.borderColor.focus};
      cursor: pointer;
    }
  }
`;

function Radio({ modifiers, label, message, ...rest }: InputProps) {
  return (
    <FieldWrapper {...{ modifiers, label, message, type: "radio" }}>
      <RadioInput {...rest} type="radio" />
      <span className="radio-control"></span>
    </FieldWrapper>
  );
}

export default Radio;
