import momoTheme from "./MomoTheme";
import { addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/utils/Global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/utils/themes";

addDecorator((story) => (
  <ThemeProvider theme={defaultTheme}>
    {story()}
    <GlobalStyle />
  </ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: momoTheme,
  },
};
