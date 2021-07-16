import { css } from "styled-components";
import { defaultTheme } from "../../../utils";

export default {
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
    .field-message {
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
    .field-message {
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
    .field-message {
      color: ${defaultTheme.status.successColorDark};
    }
  `,
};
