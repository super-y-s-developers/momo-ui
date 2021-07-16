import React from "react";
import styled, { css } from "styled-components";
import { defaultTheme, typeScale } from "../../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

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

// TODO: InputProps should support ALL possible input html props
// Can be an interface that extends InputHTMLAttributes<HTMLInputElement>
// But that doesn't take into account select and textarea props
// Think on separating those three components: input, select, textarea
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

const inputStyles = (props: InputProps) => css`
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

  /* Conditional styles */
  ${props.icon &&
  css`
    padding-left: 54px;
  `}
`;

const checkboxRadioStyles = css`
  width: 30px;
  height: 30px;
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
  warning: () => css`
    input,
    select,
    textarea {
      border-color: ${defaultTheme.status.warningColorLight};
      color: ${defaultTheme.status.warningColorDark};
      &:focus {
        box-shadow: 2px 2px 15px
          ${defaultTheme.status.warningInputShadowColorFocus};
        border-color: ${defaultTheme.status.warningColor};
      }
    }
    .input-message {
      color: ${defaultTheme.status.warningColorDark};
    }
  `,
  error: () => css`
    input,
    select,
    textarea {
      border-color: ${defaultTheme.status.errorColorLight};
      color: ${defaultTheme.status.errorColorDark};
      &:focus {
        box-shadow: 2px 2px 15px
          ${defaultTheme.status.errorInputShadowColorFocus};
        border-color: ${defaultTheme.status.errorColor};
      }
    }
    .input-message {
      color: ${defaultTheme.status.errorColorDark};
    }
  `,
  success: () => css`
    input,
    select,
    textarea {
      border-color: ${defaultTheme.status.successColorLight};
      color: ${defaultTheme.status.successColorDark};
      &:focus {
        box-shadow: 2px 2px 15px
          ${defaultTheme.status.successInputShadowColorFocus};
        border-color: ${defaultTheme.status.successColor};
      }
    }
    .input-message {
      color: ${defaultTheme.status.successColorDark};
    }
  `,
};

const InputWrapper = styled.label<InputProps>`
  input,
  select,
  textarea {
    ${(props) => inputStyles(props)}
  }
  input[type="radio"][type="checkbox"] {
    ${checkboxRadioStyles}
  }
  select {
    ${selectStyles}
  }
  textarea {
    ${textareaStyles}
  }
  .input-header {
    font-weight: bold;
    display: block;
    margin-bottom: 9px;
  }
  .input-text {
    margin-left: 12px;
  }
  .input-icon {
    color: ${defaultTheme.inputPlaceholderColor};
  }
  .input-message {
    margin-top: 5px;
    margin-left: 11px;
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

const Label = (props: InputProps) => {
  const className = isRadioOrCheckbox(props.type)
    ? "input-text"
    : "input-header";
  return <span className={className}>{props.label}</span>;
};

function Input(props: InputProps = { type: "text" }) {
  return (
    <InputWrapper {...props}>
      {!isRadioOrCheckbox(props.type) && <Label {...props} />}

      {props.type === "select" ? (
        <Select {...props} />
      ) : props.type === "textarea" ? (
        <textarea {...props} />
      ) : (
        <input {...props} />
      )}

      {isRadioOrCheckbox(props.type) && <Label {...props} />}
      {props.message && <div className="input-message">{props.message}</div>}
    </InputWrapper>
  );
}

export default Input;
