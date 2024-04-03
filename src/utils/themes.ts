import { DefaultTheme } from "styled-components";
import palette, { green, yellow, red, blue, neutral } from "./palettes";
import { bodyFont, titlesFont, subtitlesFont, typeScale } from "./typography";

export const defaultTheme: DefaultTheme = {
  palette,

  backgroundColor: neutral[200],
  textColor: { main: neutral[800], inverted: neutral[100] },

  primary: { main: green[300], hover: green[400], contrast: neutral[100] },
  tertiary: { main: neutral[300], hover: neutral[400], contrast: neutral[800] },

  status: {
    warningColor: {
      main: yellow[200],
      dark: yellow[300],
      light: yellow[100],
      contrast: neutral[800],
      inputFocusShadow: "rgba(201, 163, 0, 0.3)",
    },
    errorColor: {
      main: red[200],
      dark: red[300],
      light: red[100],
      contrast: neutral[100],
      inputFocusShadow: "rgba(255, 101, 105, 0.3)",
    },
    successColor: {
      main: green[300],
      dark: green[400],
      light: green[100],
      contrast: neutral[100],
      inputFocusShadow: "rgba(28, 184, 144, 0.3)",
    },
  },

  input: {
    backgroundColor: {
      main: neutral[100],
      disabled: neutral[300],
      focus: blue[200],
      contrast: neutral[100],
    },
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

export const darkTheme: DefaultTheme = {
  ...defaultTheme,

  backgroundColor: neutral[800],
  textColor: { main: neutral[100], inverted: neutral[800] },

  primary: { main: green[300], hover: green[200], contrast: neutral[100] },
  tertiary: { main: neutral[700], hover: neutral[600], contrast: neutral[100] },

  status: {
    warningColor: {
      ...defaultTheme.status.warningColor,
      main: yellow[200],
      light: yellow[300],
      dark: yellow[100],
    },
    errorColor: {
      ...defaultTheme.status.errorColor,
      main: red[200],
      light: red[300],
      dark: red[100],
    },
    successColor: {
      ...defaultTheme.status.successColor,
      main: green[300],
      light: green[400],
      dark: green[200],
    },
  },

  input: {
    ...defaultTheme.input,
    backgroundColor: {
      main: neutral[700],
      disabled: neutral[600],
      focus: neutral[100],
      contrast: neutral[800],
    },
    borderColor: {
      main: "transparent",
    },
    placeholderColor: neutral[400],
    focusShadowColor: "rgba(255, 255, 255, 0.1)",
    messageColor: neutral[200],
  },
};
