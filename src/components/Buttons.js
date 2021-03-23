import styled from "styled-components";
import { defaultTheme, typeScale, neutral } from "utils";

const Button = styled.button`
  font-family: ${defaultTheme.subtitlesFont};
  font-size: ${typeScale.xs};
  font-weight: 600;
  color: ${defaultTheme.textColorOnPrimary};
  padding: 12px 24px;
  border-radius: 100px;
  cursor: pointer;
  border: 3px solid;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
`;

export const SecondaryButton = styled(Button)`
  color: ${defaultTheme.primaryColorActive};
`;

export const TertiaryButton = styled(Button)`
  color: ${defaultTheme.primaryColorActive};
  background-color: ${defaultTheme.textColor};
  background-color: ${neutral[300]};
  border: none;
`;
