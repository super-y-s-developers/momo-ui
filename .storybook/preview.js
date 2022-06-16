import momoTheme from "./MomoTheme";
import { addDecorator } from "@storybook/react";
import { MomoStyle } from "../src/utils/MomoStyle";

addDecorator((story) => <MomoStyle>{story()}</MomoStyle>);

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
