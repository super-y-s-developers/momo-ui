import React from "react";
import styled, { css } from "styled-components";
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const inputBaseStyles = css`
  font-family: ${defaultTheme.primaryFont};
  font-size: ${typeScale.paragraph};
  background-color: ${defaultTheme.inputColor};
  color: ${defaultTheme.textColor};
  padding: 12px 20px;
  border-radius: 30px;
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
`;

const selectStyles = css`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  padding-right: 4em;
`;

const textareaStyles = css`
  border-radius: 10px;
  padding: 15px 20px;
`;

export const INPUT_MODIFIERS = {
  // States
  warning: () => `
    input {
      border-color: ${defaultTheme.status.warningColorLight};
      color: ${defaultTheme.status.warningColorDark};
      &:focus {
        box-shadow: 2px 2px 15px ${defaultTheme.status.warningInputShadowColorFocus};
        border-color: ${defaultTheme.status.warningColor};
      }
    }
    .input-message {
      color: ${defaultTheme.status.warningColorDark};
    }
    `,
  error: () => `
    input {
      border-color: ${defaultTheme.status.errorColorLight};
      color: ${defaultTheme.status.errorColorDark};
      &:focus {
        box-shadow: 2px 2px 15px ${defaultTheme.status.errorInputShadowColorFocus};
        border-color: ${defaultTheme.status.errorColor};
      }
    }
    .input-message {
      color: ${defaultTheme.status.errorColorDark};
    }
  `,
  success: () => `
    input {
      border-color: ${defaultTheme.status.successColorLight};
      color: ${defaultTheme.status.successColorDark};
      &:focus {
        box-shadow: 2px 2px 15px ${defaultTheme.status.successInputShadowColorFocus};
        border-color: ${defaultTheme.status.successColor};
      }
    }
    .input-message {
      color: ${defaultTheme.status.successColorDark};
    }
  `,
};

export const INPUT_TYPES = [
  "text",
  "select",
  "checkbox",
  "radio",
  "textarea",
] as const;

export type InputProps = {
  modifiers?: keyof typeof INPUT_MODIFIERS | keyof typeof INPUT_MODIFIERS[];
  type?: typeof INPUT_TYPES[number];
  label?: string;
  icon?: string;
  message?: string;
  disabled?: boolean;
  options?: { text: string; value: string }[];
  placeholder?: string;
  required?: boolean;
};

const InputWrapper = styled.div`
  input,
  select,
  textarea {
    ${inputBaseStyles}
  }
  select {
    ${selectStyles}
  }
  textarea {
    ${textareaStyles}
  }
  .input-message {
    margin-top: 5px;
    margin-left: 12px;
    font-size: ${typeScale.subParagraph};
    color: ${defaultTheme.inputMessageColor};
  }

  ${applyStyleModifiers(INPUT_MODIFIERS)}
`;

const Select = (props: InputProps) => (
  <select {...props}>
    <option value="">{props.placeholder}</option>
    {props.options?.map((item) => (
      <option value={item.value}>{item.text}</option>
    ))}
  </select>
);

function InputComponent(props: InputProps) {
  return (
    <InputWrapper {...props}>
      {props.type === "select" ? (
        <Select {...props} />
      ) : props.type === "textarea" ? (
        <textarea {...props} />
      ) : (
        <input {...props} />
      )}
      {props.message && <div className="input-message">{props.message}</div>}
    </InputWrapper>
  );
}

export default InputComponent;
