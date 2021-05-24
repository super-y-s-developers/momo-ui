import { green, yellow, red, blue, neutral } from "./palettes";
import { primaryFont, titlesFont, subtitlesFont } from "./typography";

export const defaultTheme = {
  backgroundColor: neutral[200],

  primaryColor: green[300],
  primaryColorHover: green[400],

  tertiaryColor: neutral[300],
  tertiaryColorHover: neutral[400],

  textColor: neutral[800],
  textColorInverted: neutral[100],

  status: {
    warningColor: yellow[200],
    warningColorHover: yellow[300],
    warningColorTertiary: yellow[100],

    errorColor: red[200],
    errorColorHover: red[300],
    errorColorTertiary: red[100],

    successColor: green[300],
    successColorHover: green[400],
    successColorTertiary: green[100],
  },

  inputColor: neutral[100],
  inputBorderColor: neutral[400],
  inputBorderColorFocus: blue[200],
  inputColorDisabled: neutral[300],
  inputBorderColorDisabled: neutral[500],
  inputPlaceholderColor: neutral[500],
  inputShadowColorFocus: "rgba(68, 140, 255, 0.3)",

  primaryFont,
  titlesFont,
  subtitlesFont,
};
