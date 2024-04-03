import { css, DefaultTheme } from "styled-components";

const statusModifiers = {
  // Warning buttons
  warning: ({ theme }: { theme: DefaultTheme }) => css`
    background-color: ${theme.status.warningColor.main};
    color: ${theme.status.warningColor.contrast};
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
    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.status.warningColor.dark};
      color: ${theme.textColor.inverted};
    }
  `,
  warningTertiary: ({ theme }: { theme: DefaultTheme }) => css`
    background-color: ${theme.tertiary?.main};
    color: ${theme.status.warningColor.dark};
  `,

  // Error buttons
  error: ({ theme }: { theme: DefaultTheme }) => css`
    background-color: ${theme.status.errorColor.main};
    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.status.errorColor.dark};
      color: ${theme.status.errorColor.contrast};
    }
  `,
  errorSecondary: ({ theme }: { theme: DefaultTheme }) => css`
    background-color: ${theme.textColor.inverted};
    color: ${theme.status.errorColor.dark};
    box-shadow: inset 0px 0px 0px 3px ${theme.status.errorColor.dark};
    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.status.errorColor.dark};
      color: ${theme.status.errorColor.contrast};
    }
  `,
  errorTertiary: ({ theme }: { theme: DefaultTheme }) => css`
    background-color: ${theme.tertiary?.main};
    color: ${theme.status.errorColor.dark};
  `,

  // Success buttons
  success: ({ theme }: { theme: DefaultTheme }) => css`
    background-color: ${theme.status.successColor.main};
    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.status.successColor.dark};
      color: ${theme.status.successColor.contrast};
    }
  `,
  successSecondary: ({ theme }: { theme: DefaultTheme }) => css`
    background-color: ${theme.textColor.inverted};
    color: ${theme.status.successColor.dark};
    box-shadow: inset 0px 0px 0px 3px ${theme.status.successColor.dark};
  `,
  successTertiary: ({ theme }: { theme: DefaultTheme }) => css`
    background-color: ${theme.tertiary?.main};
    color: ${theme.status.successColor.dark};
  `,
};

export default statusModifiers;
