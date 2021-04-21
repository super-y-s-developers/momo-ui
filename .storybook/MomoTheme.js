import { create } from "@storybook/theming";

export default create({
  base: "light",
  brandTitle: "Momo UI",
  brandImage: "./logos/isologo/296x80.png",

  colorPrimary: "#1CB890",

  // UI
  appBg: "#FAFAFA",

  // Typography
  fontBase: '"Nunito Sans", Verdana',
  fontCode: "monospace",

  // Text colors
  textColor: "#333333",
  textInverseColor: "white",

  // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'hotpink',

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,
});
