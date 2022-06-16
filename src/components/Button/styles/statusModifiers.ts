import { css } from "styled-components";
import { ComponentProps } from "styled-components-modifiers";

export default {
  warning: ({ theme }: ComponentProps) => css`
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
};

export const BUTTON_MODIFIERS = {
  // Warning buttons
  warning: ({ theme }: ComponentProps) => css`
    background-color: ${theme.status.warningColor};
    color: ${theme.textColor.main};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.status.warningColorDark};
      color: ${theme.textColor.inverted};
    }
  `,
  warningSecondary: ({ theme }: ComponentProps) => css`
    background-color: ${theme.textColor.inverted};
    box-shadow: inset 0px 0px 0px 3px ${theme.status.warningColorDark};
    color: ${theme.status.warningColorDark};
  `,
  warningTertiary: ({ theme }: ComponentProps) => css`
    background-color: ${theme.textColor.inverted};
    color: ${theme.status.warningColorDark};
  `,

  // Error buttons
  error: ({ theme }: ComponentProps) => css`
    background-color: ${theme.status.errorColor};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.status.errorColorDark};
      color: ${theme.textColor.inverted};
    }
  `,
  errorSecondary: ({ theme }: ComponentProps) => css`
    background-color: ${theme.textColor.inverted};
    color: ${theme.status.errorColorDark};
    box-shadow: inset 0px 0px 0px 3px ${theme.status.errorColorDark};
  `,
  errorTertiary: ({ theme }: ComponentProps) => css`
    background-color: ${theme.textColor.inverted};
    color: ${theme.status.errorColorDark};
  `,

  // Success buttons
  success: ({ theme }: ComponentProps) => css`
    background-color: ${theme.status.successColor};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.status.successColorDark};
      color: ${theme.textColor.inverted};
    }
  `,
  successSecondary: ({ theme }: ComponentProps) => css`
    background-color: ${theme.textColor.inverted};
    color: ${theme.status.successColorDark};
    box-shadow: inset 0px 0px 0px 3px ${theme.status.successColorDark};
  `,
  successTertiary: ({ theme }: ComponentProps) => css`
    background-color: ${theme.textColor.inverted};
    color: ${theme.status.successColorDark};
  `,
};
