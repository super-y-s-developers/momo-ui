import React from "react";

import Button, {
  SecondaryButton,
  TertiaryButton,
  ButtonProps,
  BUTTON_MODIFIERS,
} from "./Button";

export default {
  component: Button,
  title: "Button",
  argTypes: {
    modifiers: {
      options: Object.keys(BUTTON_MODIFIERS),
      control: { type: "check" },
    },
  },
};

const Template = (args: ButtonProps) => <Button {...args}>Hello</Button>;

export const Primary = Template.bind({});

export const Secondary = () => <SecondaryButton>Hello</SecondaryButton>;

export const Tertiary = () => <TertiaryButton>Hello</TertiaryButton>;
