import React from "react";
import { Story, Meta } from '@storybook/react';

import Button, {
  SecondaryButton,
  TertiaryButton,
  ButtonProps,
  BUTTON_MODIFIERS,
} from "./Button";

export default {
  component: Button,
  title: "Atoms/Button",
  argTypes: {
    modifiers: {
      options: Object.keys(BUTTON_MODIFIERS),
      control: { type: "check" },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Hello</Button>;

export const Primary = Template.bind({});

export const Secondary = () => <SecondaryButton>Hello</SecondaryButton>;

export const Tertiary = () => <TertiaryButton>Hello</TertiaryButton>;
