import { css, DefaultTheme } from "styled-components";

export default {
  // Warning buttons
  warning: ({ theme }: { theme: DefaultTheme }) => css`
    background-color: ${theme.status.warningColor.main};
    color: ${theme.textColor.main};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.status.warningColor.dark};
      color: ${theme.textColor.inverted};
    }
  `,
  warningSecondary: ({ theme }: { theme: DefaultTheme }) => css`
    background-color: ${theme.textColor.inverted};
    box-shadow: inset 0px 0px 0px 3px ${theme.status.warningColor.dark};
    color: ${theme.status.warningColor.dark};
  `,
  warningTertiary: ({ theme }: { theme: DefaultTheme }) => css`
    background-color: ${theme.textColor.inverted};
    color: ${theme.status.warningColor.dark};
  `,

  // Error buttons
  error: ({ theme }: { theme: DefaultTheme }) => css`
    background-color: ${theme.status.errorColor.main};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.status.errorColor.dark};
      color: ${theme.textColor.inverted};
    }
  `,
  errorSecondary: ({ theme }: { theme: DefaultTheme }) => css`
    background-color: ${theme.textColor.inverted};
    color: ${theme.status.errorColor.dark};
    box-shadow: inset 0px 0px 0px 3px ${theme.status.errorColor.dark};
  `,
  errorTertiary: ({ theme }: { theme: DefaultTheme }) => css`
    background-color: ${theme.textColor.inverted};
    color: ${theme.status.errorColor.dark};
  `,

  // Success buttons
  success: ({ theme }: { theme: DefaultTheme }) => css`
    background-color: ${theme.status.successColor.main};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.status.successColor.dark};
      color: ${theme.textColor.inverted};
    }
  `,
  successSecondary: ({ theme }: { theme: DefaultTheme }) => css`
    background-color: ${theme.textColor.inverted};
    color: ${theme.status.successColor.dark};
    box-shadow: inset 0px 0px 0px 3px ${theme.status.successColor.dark};
  `,
  successTertiary: ({ theme }: { theme: DefaultTheme }) => css`
    background-color: ${theme.textColor.inverted};
    color: ${theme.status.successColor.dark};
  `,
};
