import { css } from "styled-components";
import { defaultTheme, typeScale } from "../../../utils";
import FIELD_TYPES from "../constants/fieldTypes";

const fieldStyles = css`
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

const isRadioOrCheck = (type: typeof FIELD_TYPES[number]) =>
  ["radio", "checkbox"].includes(type);

export default (
  type: typeof FIELD_TYPES[number],
  icon?: string,
  iconPos?: "left" | "right"
) => css`
  display: inline-block;

  /* General field styles */
  input,
  select,
  textarea {
    ${fieldStyles}
  }

  /* Specific field styles */
  textarea {
    border-radius: 10px;
    min-height: 8em;
    padding: 15px 20px;
  }
  input[type="checkbox"]:disabled + span,
  input[type="radio"]:disabled + span {
    color: ${defaultTheme.inputBorderColorDisabled};
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
    font-size: ${typeScale.subParagraph};
    color: ${defaultTheme.inputMessageColor};
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
      color: ${defaultTheme.inputPlaceholderColor};
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
