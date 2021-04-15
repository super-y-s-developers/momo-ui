import styled from "styled-components";
import { defaultTheme, typeScale, neutral } from "utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.paragraph};
    padding: 8px 16px;
  `,
  large: () => `
    font-size: ${typeScale.s};
    padding: 16px 32px;
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

  &:focus {
    outline: solid 3px ${defaultTheme.primaryColor};
    // box-shadow: -7px 0 0 3px ${defaultTheme.primaryColor};
  }

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};

  &:hover, &:active {
    background-color: ${defaultTheme.primaryColorHover};
  }
  &:disabled {
    background-color: ${defaultTheme.primaryColor};
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${defaultTheme.textColorOnPrimary};
  color: ${defaultTheme.primaryColorHover};
  box-shadow: inset 0px 0px 0px 3px ${defaultTheme.primaryColorHover};

  &:hover, &:active {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColorOnPrimary};
  }
  &:disabled {
    background-color: ${defaultTheme.textColorOnPrimary};
    color: ${defaultTheme.primaryColorHover};
  }
`;

export const TertiaryButton = styled(Button)`
  color: ${defaultTheme.textColor};
  background-color: ${neutral[300]};

  &:hover, &:active {
    background-color: ${neutral[400]}
  }
  &:disabled {
    background-color: ${neutral[300]};
  }
`;

export default PrimaryButton;