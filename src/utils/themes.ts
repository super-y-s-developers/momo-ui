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
    warningColorDark: yellow[300],
    warningColorLight: yellow[100],
    warningInputShadowColorFocus: "rgba(201, 163, 0, 0.3)",

    errorColor: red[200],
    errorColorDark: red[300],
    errorColorLight: red[100],
    errorInputShadowColorFocus: "rgba(255, 101, 105, 0.3)",

    successColor: green[300],
    successColorDark: green[400],
    successColorLight: green[100],
    successInputShadowColorFocus: "rgba(28, 184, 144, 0.3)",
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
