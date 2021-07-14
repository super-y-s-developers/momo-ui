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

export default (type: typeof FIELD_TYPES[number], icon?: string) => css`
  input,
  select,
  textarea {
    ${fieldStyles}

    /* Conditional styles */
    ${icon && "padding-left: 54px;"}
  }
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

    .field-text {
      margin-left: 12px;
      &.disabled {
        color: ${defaultTheme.inputBorderColorDisabled};
      }
    }
    .field-icon {
      color: ${defaultTheme.inputPlaceholderColor};
      position: absolute;
      left: 20px;
      top: 11px;
    }
  }
`;
