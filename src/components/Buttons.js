import styled from "styled-components";
import { defaultTheme, typeScale, neutral } from "utils";
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
      color: ${defaultTheme.textColor};
    }
  `,
  warningSecondary: () => `
    background-color: ${defaultTheme.textColorInverted};
    color: ${defaultTheme.textColor};
    box-shadow: inset 0px 0px 0px 3px ${defaultTheme.status.warningColorHover};
  `,
  warningTertiary: () => `
    background-color: ${defaultTheme.status.warningColorTertiary};
  `,

  // Error buttons
  error: () => `
    background-color: ${defaultTheme.status.errorColor};

    &:hover, &:focus, &:active {
      background-color: ${defaultTheme.status.errorColorHover};
    }
  `,
  errorSecondary: () => `
    background-color: ${defaultTheme.textColorInverted};
    color: ${defaultTheme.status.errorColorHover};
    box-shadow: inset 0px 0px 0px 3px ${defaultTheme.status.errorColorHover};
  `,
  errorTertiary: () => `
    background-color: ${defaultTheme.status.errorColorTertiary};
    color: ${defaultTheme.textColor};
  `,

  // Success buttons
  success: () => `
    background-color: ${defaultTheme.status.successColor};

    &:hover, &:focus, &:active {
      background-color: ${defaultTheme.status.successColorHover};
      color: ${defaultTheme.textColor};
    }
  `,
  successSecondary: () => `
    background-color: ${defaultTheme.textColorInverted};
    color: ${defaultTheme.status.successColorHover};
    box-shadow: inset 0px 0px 0px 3px ${defaultTheme.status.successColorHover};
  `,
  successTertiary: () => `
    background-color: ${defaultTheme.status.successColorTertiary};
    color: ${defaultTheme.textColor};
  `,
};

const Button = styled.button`
  font-family: ${defaultTheme.subtitlesFont};
  font-size: ${typeScale.xs};
  font-weight: 600;
  color: ${defaultTheme.textColorOnPrimary};
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
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};

  &:hover, &:active, &:focus {
    background-color: ${defaultTheme.primaryColorHover};
  }
  &:disabled {
    background-color: ${defaultTheme.primaryColor};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background-color: ${defaultTheme.textColorOnPrimary};
  color: ${defaultTheme.primaryColorHover};
  box-shadow: inset 0px 0px 0px 3px ${defaultTheme.primaryColorHover};

  &:hover, &:active, &:focus {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColorOnPrimary};
  }
  &:disabled {
    background-color: ${defaultTheme.textColorOnPrimary};
    color: ${defaultTheme.primaryColorHover};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  color: ${defaultTheme.textColor};
  background-color: ${neutral[300]};

  &:hover, &:active, &:focus {
    background-color: ${neutral[400]}
  }
  &:disabled {
    background-color: ${neutral[300]};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;