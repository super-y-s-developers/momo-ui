import React from "react";
import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

export const INPUT_MODIFIERS = {
  // States
  warning: () => `
    border-color: ${defaultTheme.status.warningColorLight};
    color: ${defaultTheme.status.warningColorDark};
    &:focus {
      box-shadow: 2px 2px 15px ${defaultTheme.status.warningInputShadowColorFocus};
      border-color: ${defaultTheme.status.warningColor};
    }
    `,
  error: () => `
    border-color: ${defaultTheme.status.errorColorLight};
    color: ${defaultTheme.status.errorColorDark};
    &:focus {
      box-shadow: 2px 2px 15px ${defaultTheme.status.errorInputShadowColorFocus};
      border-color: ${defaultTheme.status.errorColor};
    }
  `,
  success: () => `
    border-color: ${defaultTheme.status.successColorLight};
    color: ${defaultTheme.status.successColorDark};
    &:focus {
      box-shadow: 2px 2px 15px ${defaultTheme.status.successInputShadowColorFocus};
      border-color: ${defaultTheme.status.successColor};
    }
  `,
};

export const INPUT_TYPES = {
  text: () => ``,
  select: () => ``,
  checkbox: () => ``,
  radio: () => ``,
  textarea: () => ``,
};

export type InputProps = {
  modifiers?: keyof typeof INPUT_MODIFIERS | keyof typeof INPUT_MODIFIERS[];
  type?: keyof typeof INPUT_TYPES;
  label?: string;
  icon?: string;
  message?: string;
};

const Input = styled.input<InputProps>`
  font-family: ${defaultTheme.primaryFont};
  font-size: ${typeScale.paragraph};
  background-color: ${defaultTheme.inputColor};
  color: ${defaultTheme.textColor};
  padding: 12px 20px;
  border-radius: 100px;
  border: 2px solid ${defaultTheme.inputBorderColor};
  box-sizing: border-box;
  transition: background-color 0.2s linear, color 0.2s linear,
    box-shadow 0.2s linear;
  ::placeholder {
    color: ${defaultTheme.inputPlaceholderColor};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${defaultTheme.inputBorderColorDisabled};
    background-color: ${defaultTheme.inputColorDisabled};
    border-color: ${defaultTheme.inputBorderColorDisabled};
  }
  &:focus {
    outline: none;
    box-shadow: 2px 2px 15px ${defaultTheme.inputShadowColorFocus};
    border-color: ${defaultTheme.inputBorderColorFocus};
  }

  ${applyStyleModifiers(INPUT_MODIFIERS)}
`;

const InputMessage = styled.div`
  margin-top: 8px;
  margin-left: 10px;
  font-size: ${typeScale.subParagraph};
  color: ${defaultTheme.inputMessageColor};
`;

function InputWrapper(props: InputProps) {
  return (
    <>
      <Input {...props} />
      {props.message && <InputMessage>{props.message}</InputMessage>}
    </>
  );
}

export default InputWrapper;
