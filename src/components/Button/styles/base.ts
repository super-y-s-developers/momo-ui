import { css, DefaultTheme } from "styled-components";

const baseStyles = (theme: DefaultTheme, loading?: boolean) => css`
  font-family: ${theme.fonts.subtitles};
  font-size: ${theme.typeScale.mobile.xs};
  font-weight: 600;
  color: ${theme.primary.contrast};
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
    box-shadow: 0 0 0 4px white, 0 0 0 7px ${theme.primary.main};
  }
  &:active {
    box-shadow: 0 0 0 4px white, 0 0 0 7px ${theme.primary.main},
      inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  ${loading && "padding: 11px 24px 7px 24px;"}

  /* LOADER */
  i.loader {
    font-size: ${theme.typeScale.mobile.lg};
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

export default baseStyles;
