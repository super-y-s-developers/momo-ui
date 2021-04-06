import { green, yellow, neutral } from "./palettes";
import { primaryFont, titlesFont, subtitlesFont } from "./typography";

export const defaultTheme = {
  primaryColor: green[300],
  primaryColorHover: green[400],
  primaryColorFocusOutline: yellow[200],
  textColorOnPrimary: neutral[100],

  textColor: neutral[800],
  textColorInverted: neutral[100],

  primaryFont,
  titlesFont,
  subtitlesFont,
};
