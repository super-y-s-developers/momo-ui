import React from "react";
import { Story, Meta } from "@storybook/react";

import Input, { InputProps } from "./Input";
import FIELD_MODIFIERS from "./constants/fieldModifiers";

export default {
  component: Input,
  title: "Atoms/Fields/Input",
  argTypes: {
    modifiers: {
      options: FIELD_MODIFIERS,
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
  value: "Ana Palacios",
  disabled: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...Default.args,
  label: "Name",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: "arrow-right",
};

export const WithMessage = Template.bind({});
WithMessage.args = {
  ...Default.args,
  placeholder: "Set a strong password",
  type: "password",
  message:
    "8 characters with at least one number, lowercase and uppercase letter",
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args,
  modifiers: "warning",
  label: "Email",
  defaultValue: "hello@myemail.com",
  message: "You get a better experience when using a Gmail account",
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  modifiers: "error",
  label: "Password",
  type: "password",
  defaultValue: "Weak",
  message: "This password will be hacked soon",
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  modifiers: "success",
  label: "Username",
  defaultValue: "pollencio",
  message: "That username is awesome! (and available)",
};
