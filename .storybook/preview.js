import momoTheme from "./MomoTheme";
import { addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/utils/Global";
import { withKnobs } from "@storybook/addon-knobs";

addDecorator((story) => (
  <>
    {story()}
    <GlobalStyle />
  </>
));

addDecorator(withKnobs);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  docs: {
    theme: momoTheme
  }
};
