import { css, DefaultTheme } from "styled-components";
import FIELD_TYPES from "../constants/fieldTypes";

const fieldStyles = (theme: DefaultTheme) => css`
  font-family: ${theme.fonts.body};
  font-size: ${theme.typeScale.mobile.paragraph};
  background-color: ${theme.input.backgroundColor.main};
  color: ${theme.textColor.main};
  padding: 12px 20px;
  border-radius: 30px;
  border: 2px solid ${theme.input.borderColor.main};
  box-sizing: border-box;
  transition: background-color 0.2s linear, color 0.2s linear,
    box-shadow 0.2s linear;
  ::placeholder {
    color: ${theme.input.placeholderColor};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${theme.input.borderColor.disabled};
    background-color: ${theme.input.backgroundColor.disabled};
    border-color: ${theme.input.borderColor.disabled};
  }
  &:focus {
    outline: none;
    box-shadow: 2px 2px 15px ${theme.input.focusShadowColor};
    border-color: ${theme.input.borderColor.focus};
  }
`;

const isRadioOrCheck = (type: typeof FIELD_TYPES[number]) =>
  ["radio", "checkbox"].includes(type);

const baseStyles = (
  theme: DefaultTheme,
  type: typeof FIELD_TYPES[number],
  icon?: string,
  iconPos?: "left" | "right"
) => css`
  display: inline-block;

  /* General field styles */
  input,
  select,
  textarea {
    ${fieldStyles(theme)}
  }

  /* Specific field styles */
  textarea {
    border-radius: 10px;
    min-height: 8em;
    padding: 15px 20px;
  }
  input[type="checkbox"]:disabled ~ .field-text,
  input[type="radio"]:disabled ~ .field-text {
    color: ${theme.input.borderColor.disabled};
    cursor: not-allowed;
  }

  /* With-icon styles */
  input,
  select,
  textarea {
    /* Conditional styles */
    ${icon && iconPos === "left" && "padding-left: 48px;"}
    ${icon && iconPos === "right" && "padding-right: 48px;"}
  }

  /* Sibling elements styles */
  .field-header {
    font-weight: bold;
    display: block;
    margin-bottom: 9px;
  }
  .field-message {
    margin-top: 5px;
    margin-left: 11px;
    font-size: ${theme.typeScale.mobile.subParagraph};
    color: ${theme.input.messageColor};
  }
  .field-content {
    position: relative;
    /* Conditional styles */
    ${isRadioOrCheck(type) &&
    css`
      display: flex;
      align-items: center;
    `}
    .field-icon {
      color: ${theme.input.placeholderColor};
      position: absolute;
      top: 11px;
      ${iconPos === "right" && "right: 20px;"}
      ${iconPos === "left" && "left: 20px;"}
    }
    .field-text {
      margin-left: 10px;
    }
  }
`;

export default baseStyles;
