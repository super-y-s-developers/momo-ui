import React from "react";
import { Story, Meta } from "@storybook/react";

import Input, { InputProps } from "./Input";
import MODIFIERS from "./constants/modifiers";

export default {
  component: Input,
  title: "Atoms/Input",
  argTypes: {
    modifiers: {
      options: Object.keys(MODIFIERS),
      control: { type: "check" },
    },
    message: {
      control: { type: "text" },
    },
    icon: {
      control: { type: "text" },
    },
    label: {
      control: { type: "text" },
    },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Write your name here",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...Default.args,
  label: "Title",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: "arrow-right",
};

export const WithMessage = Template.bind({});
WithMessage.args = {
  ...Default.args,
  type: "password",
  message:
    "8 characters with at least one number, lowercase and uppercase letter",
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args,
  modifiers: "warning",
  defaultValue: "Hello world",
  message: "You should pay attention to this ...",
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  modifiers: "error",
  defaultValue: "Hello world",
  message: "Ups! something went wrong",
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  modifiers: "success",
  defaultValue: "Hello world",
  message: "Everything okay!",
};
