import styled from "styled-components";
import { defaultTheme, typeScale } from "utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  // Sizes
  small: () => `
    font-size: ${typeScale.paragraph};
    padding: 8px 16px;
  `,
  large: () => `
    font-size: ${typeScale.s};
    padding: 16px 32px;
  `,

  // Warning buttons
  warning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColor};

    &:hover, &:focus, &:active {
      background-color: ${defaultTheme.status.warningColorHover};
      color: ${defaultTheme.textColorInverted};
    }
  `,
  warningSecondary: () => `
    background-color: ${defaultTheme.textColorInverted};
    box-shadow: inset 0px 0px 0px 3px ${defaultTheme.status.warningColorHover};
    color: ${defaultTheme.status.warningColorHover};
  `,
  warningTertiary: () => `
    background-color: ${defaultTheme.textColorInverted};
    color: ${defaultTheme.status.warningColorHover};
  `,

  // Error buttons
  error: () => `
    background-color: ${defaultTheme.status.errorColor};

    &:hover, &:focus, &:active {
      background-color: ${defaultTheme.status.errorColorHover};
      color: ${defaultTheme.textColorInverted};
    }
  `,
  errorSecondary: () => `
    background-color: ${defaultTheme.textColorInverted};
    color: ${defaultTheme.status.errorColorHover};
    box-shadow: inset 0px 0px 0px 3px ${defaultTheme.status.errorColorHover};
  `,
  errorTertiary: () => `
    background-color: ${defaultTheme.textColorInverted};
    color: ${defaultTheme.status.errorColorHover};
  `,

  // Success buttons
  success: () => `
    background-color: ${defaultTheme.status.successColor};

    &:hover, &:focus, &:active {
      background-color: ${defaultTheme.status.successColorHover};
      color: ${defaultTheme.textColorInverted};
    }
  `,
  successSecondary: () => `
    background-color: ${defaultTheme.textColorInverted};
    color: ${defaultTheme.status.successColorHover};
    box-shadow: inset 0px 0px 0px 3px ${defaultTheme.status.successColorHover};
  `,
  successTertiary: () => `
    background-color: ${defaultTheme.textColorInverted};
    color: ${defaultTheme.status.successColorHover};
  `,
};

export const Button = styled.button`
  font-family: ${defaultTheme.subtitlesFont};
  font-size: ${typeScale.xs};
  font-weight: 600;
  color: ${defaultTheme.textColorInverted};
  padding: 12px 24px;
  border-radius: 100px;
  cursor: pointer;
  border: none;
  box-sizing: border-box;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px white, 0 0 0 7px ${defaultTheme.primaryColor};
  }
  &:active {
    box-shadow: 0 0 0 4px white, 0 0 0 7px ${defaultTheme.primaryColor},
      inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};

  &:hover,
  &:active,
  &:focus {
    background-color: ${defaultTheme.primaryColorHover};
  }
  &:disabled {
    background-color: ${defaultTheme.primaryColor};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background-color: ${defaultTheme.textColorInverted};
  color: ${defaultTheme.primaryColorHover};
  box-shadow: inset 0px 0px 0px 3px ${defaultTheme.primaryColorHover};

  &:hover,
  &:active,
  &:focus {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColorInverted};
  }
  &:disabled {
    background-color: ${defaultTheme.textColorInverted};
    color: ${defaultTheme.primaryColorHover};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  color: ${defaultTheme.textColor};
  background-color: ${defaultTheme.tertiaryColor};

  &:hover,
  &:active,
  &:focus {
    background-color: ${defaultTheme.tertiaryColorHover};
  }
  &:disabled {
    background-color: ${defaultTheme.tertiaryColor};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;
