import { css } from "styled-components";
import { defaultTheme, typeScale } from "../../../utils";

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

export default css`
  input,
  select,
  textarea {
    ${fieldStyles}
  }
  .field-header {
    font-weight: bold;
    display: block;
    margin-bottom: 9px;
  }
  .field-text {
    margin-left: 12px;
  }
  .field-icon {
    color: ${defaultTheme.inputPlaceholderColor};
  }
  .field-message {
    margin-top: 5px;
    margin-left: 11px;
    font-size: ${typeScale.subParagraph};
    color: ${defaultTheme.inputMessageColor};
  }
`;
