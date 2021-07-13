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

const selectBaseStyles = css`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  padding-right: 4em;
`;

const textareaBaseStyles = css`
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

function isRadioOrCheckbox(type: typeof INPUT_TYPES[number]) {
  return ["radio", "checkbox"].indexOf(type) !== -1;
}

export type InputProps = {
  type: typeof INPUT_TYPES[number];
  id?: string;
  modifiers?: keyof typeof INPUT_MODIFIERS | keyof typeof INPUT_MODIFIERS[];
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
    ${selectBaseStyles}
  }
  textarea {
    ${textareaBaseStyles}
  }
  .input-message {
    margin-top: 5px;
    margin-left: 12px;
    font-size: ${typeScale.subParagraph};
    color: ${defaultTheme.inputMessageColor};
  }
  label {
    &.text {
      margin-left: 12px;
    }
    &.header {
      font-weight: bold;
      display: block;
      margin-bottom: 9px;
    }
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

const Label = (props: InputProps & React.HTMLAttributes<HTMLDivElement>) => (
  <label className={props.className} htmlFor={props.id}>
    {props.label}
  </label>
);

function InputComponent(props: InputProps = { type: "text" }) {
  return (
    <InputWrapper {...props}>
      {!isRadioOrCheckbox(props.type) && (
        <Label className="header" {...props} />
      )}
      {props.type === "select" ? (
        <Select {...props} />
      ) : props.type === "textarea" ? (
        <textarea {...props} />
      ) : (
        <input {...props} />
      )}
      {isRadioOrCheckbox(props.type) && <Label className="text" {...props} />}
      {props.message && <div className="input-message">{props.message}</div>}
    </InputWrapper>
  );
}

export default InputComponent;
