import "styled-components";

export interface Palette {
  neutral: { [shade: number]: string };
  [color: string]: { [shade: number]: string };
}
interface ColorI {
  main: string;
  light?: string;
  dark?: string;
  hover?: string;
  focus?: string;
  disabled?: string;
  inverted?: string;
  contrast?: string;
}
interface StatusI extends ColorI {
  inputFocusShadow: string;
}
interface TypeScaleI {
  basePx: string;
  xxl?: string;
  xl: string;
  lg: string;
  md: string;
  sm: string;
  xs: string;
  paragraph: string;
  subParagraph?: string;
  helperText: string;
  copyrightText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: Palette;

    backgroundColor: string;
    textColor: ColorI;

    primary: ColorI;
    secondary?: ColorI;
    tertiary?: ColorI;

    status: {
      successColor: StatusI;
      warningColor: StatusI;
      errorColor: StatusI;
    };

    input: {
      backgroundColor: ColorI;
      borderColor: ColorI;
      placeholderColor: string;
      focusShadowColor: string;
      messageColor: string;
    };

    fonts: {
      body: string;
      titles: string;
      subtitles: string;
    };

    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    typeScale: { mobile: TypeScaleI; desktop: TypeScaleI };
  }
}
