import React from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import Icon from "../Icon";

import baseStyles from "./styles/base";
import sizeModifiers from "./styles/sizeModifiers";
import statusModifiers from "./styles/statusModifiers";

const modifiersStyles = { ...sizeModifiers, ...statusModifiers };

export type ButtonProps = JSX.IntrinsicElements["button"] & {
  modifiers?: keyof typeof modifiersStyles | keyof typeof modifiersStyles[];
  // variant: "primary" | "secondary" | "tertiary" | undefined;
  loading?: boolean;
};

const StyledButton = styled(Button)<ButtonProps>`
  ${(props) => baseStyles(props.theme, props.loading)}
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
  background-color: ${(props) => props.theme.primary.main};

  &:hover,
  &:active,
  &:focus {
    background-color: ${(props) => props.theme.primary.hover};
  }
  &:disabled {
    background-color: ${(props) => props.theme.primary.main};
  }

  ${applyStyleModifiers(modifiersStyles)}
`;

export const SecondaryButton = styled(StyledButton)<ButtonProps>`
  background-color: ${(props) => props.theme.textColor.inverted};
  color: ${(props) => props.theme.primary.hover};
  box-shadow: inset 0px 0px 0px 3px ${(props) => props.theme.primary.hover};

  &:hover,
  &:active,
  &:focus {
    background-color: ${(props) => props.theme.primary.hover};
    color: ${(props) => props.theme.textColor.inverted};
  }
  &:disabled {
    background-color: ${(props) => props.theme.textColor.inverted};
    color: ${(props) => props.theme.primary.hover};
  }

  ${applyStyleModifiers(modifiersStyles)}
`;

export const TertiaryButton = styled(StyledButton)<ButtonProps>`
  color: ${(props) => props.theme.tertiary?.contrast};
  background-color: ${(props) => props.theme.tertiary?.main};

  &:hover,
  &:active,
  &:focus {
    background-color: ${(props) => props.theme.tertiary?.hover};
  }
  &:disabled {
    background-color: ${(props) => props.theme.tertiary?.main};
  }

  ${applyStyleModifiers(modifiersStyles)}
`;

export default PrimaryButton;
