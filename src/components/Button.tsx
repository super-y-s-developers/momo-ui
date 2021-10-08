import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";
import React from "react";
import Icon from "./Icon";

export const BUTTON_MODIFIERS = {
  // Sizes
  small: (props: { loading: boolean }) => `
    font-size: ${typeScale.paragraph};
    padding: 8px 16px;
    
    ${
      props.loading &&
      `
      padding: 8px 16px 4px 16px;
    `
    }
    i.loader {
    font-size: ${typeScale.s};
  }
  `,
  large: (props: { loading: boolean }) => `
    font-size: ${typeScale.s};
    padding: 16px 32px;
    
    ${
      props.loading &&
      `
      padding: 15px 32px 10px 32px;
    `
    }
    i.loader {
    font-size: ${typeScale.xl};
  `,

  // Warning buttons
  warning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColor};

    &:hover, &:focus, &:active {
      background-color: ${defaultTheme.status.warningColorDark};
      color: ${defaultTheme.textColorInverted};
    }
  `,
  warningSecondary: () => `
    background-color: ${defaultTheme.textColorInverted};
    box-shadow: inset 0px 0px 0px 3px ${defaultTheme.status.warningColorDark};
    color: ${defaultTheme.status.warningColorDark};
  `,
  warningTertiary: () => `
    background-color: ${defaultTheme.textColorInverted};
    color: ${defaultTheme.status.warningColorDark};
  `,

  // Error buttons
  error: () => `
    background-color: ${defaultTheme.status.errorColor};

    &:hover, &:focus, &:active {
      background-color: ${defaultTheme.status.errorColorDark};
      color: ${defaultTheme.textColorInverted};
    }
  `,
  errorSecondary: () => `
    background-color: ${defaultTheme.textColorInverted};
    color: ${defaultTheme.status.errorColorDark};
    box-shadow: inset 0px 0px 0px 3px ${defaultTheme.status.errorColorDark};
  `,
  errorTertiary: () => `
    background-color: ${defaultTheme.textColorInverted};
    color: ${defaultTheme.status.errorColorDark};
  `,

  // Success buttons
  success: () => `
    background-color: ${defaultTheme.status.successColor};

    &:hover, &:focus, &:active {
      background-color: ${defaultTheme.status.successColorDark};
      color: ${defaultTheme.textColorInverted};
    }
  `,
  successSecondary: () => `
    background-color: ${defaultTheme.textColorInverted};
    color: ${defaultTheme.status.successColorDark};
    box-shadow: inset 0px 0px 0px 3px ${defaultTheme.status.successColorDark};
  `,
  successTertiary: () => `
    background-color: ${defaultTheme.textColorInverted};
    color: ${defaultTheme.status.successColorDark};
  `,
};

export type ButtonProps = JSX.IntrinsicElements["button"] & {
  modifiers?: keyof typeof BUTTON_MODIFIERS | keyof typeof BUTTON_MODIFIERS[];
  // variant: "primary" | "secondary" | "tertiary" | undefined;
  loading?: boolean;
};

const StyledButton = styled(Button)<ButtonProps>`
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
  ${(props) =>
    props.loading &&
    `
    padding: 11px 24px 7px 24px;
  `}

  /* LOADER */
  i.loader {
    font-size: ${typeScale.l};
    animation: spin 2.5s infinite linear;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function Button({ loading, children, ...props }: ButtonProps) {
  return (
    <button {...props}>
      {loading ? (
        <Icon icon="spinner" weight="bold" className="loader" />
      ) : (
        children
      )}
    </button>
  );
}

export const PrimaryButton = styled(StyledButton)<ButtonProps>`
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

export const SecondaryButton = styled(StyledButton)<ButtonProps>`
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

export const TertiaryButton = styled(StyledButton)<ButtonProps>`
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
