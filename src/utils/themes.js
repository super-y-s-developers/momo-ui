import { green, yellow, red, neutral } from "./palettes";
import { primaryFont, titlesFont, subtitlesFont } from "./typography";

export const defaultTheme = {
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

  primaryFont,
  titlesFont,
  subtitlesFont,
};
