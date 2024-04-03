import React from "react";
import { Story, Meta } from "@storybook/react";
import inputMeta from "./Input.stories";

import Checkbox from "./Checkbox";
import { InputProps } from "./Input";

export default {
  component: Checkbox,
  title: "Atoms/Fields/Checkbox",
  argTypes: {
    ...inputMeta.argTypes,
    checked: {
      control: { type: "boolean" },
    },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Choose me!",
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Nice, you chose me!",
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const WithMessage = Template.bind({});
WithMessage.args = {
  label: "I want to receive notifications",
  message: "You can disable this later",
};

export const Warning = Template.bind({});
Warning.args = {
  modifiers: "warning",
  label: "Subscribe me to the channel",
  message: "It's an experience you don't wanna miss!",
};

export const Error = Template.bind({});
Error.args = {
  modifiers: "error",
  label: "I accept terms and conditions",
  message: "I know you didn't read, but we need you to accept",
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  modifiers: "success",
  checked: true,
  message: "You're awesome ... just because!",
};
