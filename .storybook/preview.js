import momoTheme from "./MomoTheme";
import { addDecorator } from "@storybook/react";
import { MomoStyleWrapper } from "../src/utils/MomoStyle";

addDecorator((story) => <MomoStyleWrapper>{story()}</MomoStyleWrapper>);

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
