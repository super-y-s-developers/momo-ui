import { css, DefaultTheme } from "styled-components";

const modifiers = {
  warning: ({ theme }: { theme: DefaultTheme }) => css`
    input,
    select,
    textarea {
      border-color: ${theme.status.warningColor.light};
      color: ${theme.status.warningColor.dark};
      &:focus {
        box-shadow: 2px 2px 15px ${theme.status.warningColor.inputFocusShadow};
        border-color: ${theme.status.warningColor.main};
      }
    }
    .field-message {
      color: ${theme.status.warningColor.dark};
    }
  `,
  error: ({ theme }: { theme: DefaultTheme }) => css`
    input,
    select,
    textarea {
      border-color: ${theme.status.errorColor.light};
      color: ${theme.status.errorColor.dark};
      &:focus {
        box-shadow: 2px 2px 15px ${theme.status.errorColor.inputFocusShadow};
        border-color: ${theme.status.errorColor.main};
      }
    }
    .field-message {
      color: ${theme.status.errorColor.dark};
    }
  `,
  success: ({ theme }: { theme: DefaultTheme }) => css`
    input,
    select,
    textarea {
      border-color: ${theme.status.successColor.light};
      color: ${theme.status.successColor.dark};
      &:focus {
        box-shadow: 2px 2px 15px ${theme.status.successColor.inputFocusShadow};
        border-color: ${theme.status.successColor.main};
      }
    }
    .field-message {
      color: ${theme.status.successColor.dark};
    }
  `,
};

export default modifiers;
