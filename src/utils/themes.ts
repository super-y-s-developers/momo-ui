import { DefaultTheme } from "styled-components";
import palette, { green, yellow, red, blue, neutral } from "./palettes";
import { bodyFont, titlesFont, subtitlesFont, typeScale } from "./typography";

export const defaultTheme: DefaultTheme = {
  palette,

  backgroundColor: neutral[200],
  textColor: { main: neutral[800], inverted: neutral[100] },

  primary: { main: green[300], hover: green[400] },
  tertiary: { main: neutral[300], hover: neutral[400] },

  status: {
    warningColor: {
      main: yellow[200],
      dark: yellow[300],
      light: yellow[100],
      inputFocusShadow: "rgba(201, 163, 0, 0.3)",
    },
    errorColor: {
      main: red[200],
      dark: red[300],
      light: red[100],
      inputFocusShadow: "rgba(255, 101, 105, 0.3)",
    },
    successColor: {
      main: green[300],
      dark: green[400],
      light: green[100],
      inputFocusShadow: "rgba(28, 184, 144, 0.3)",
    },
  },

  input: {
    backgroundColor: { main: neutral[100], disabled: neutral[300] },
    borderColor: {
      main: neutral[400],
      focus: blue[200],
      disabled: neutral[500],
    },
    placeholderColor: neutral[500],
    focusShadowColor: "rgba(68, 140, 255, 0.3)",
    messageColor: neutral[600],
  },

  fonts: {
    body: bodyFont,
    titles: titlesFont,
    subtitles: subtitlesFont,
  },

  breakpoints: {
    xs: "0",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },

  typeScale,
};
