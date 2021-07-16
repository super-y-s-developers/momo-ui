import React from "react";
import { Story, Meta } from "@storybook/react";
import inputMeta from "./Input.stories";

import Textarea from "./Textarea";
import { TextareaProps } from "./Textarea";

export default {
  component: Textarea,
  title: "Atoms/Fields/Textarea",
  argTypes: {
    ...inputMeta.argTypes,
  },
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Leave us a nice message",
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

export const WithMessage = Template.bind({});
WithMessage.args = {
  ...Default.args,
  placeholder: "Set a strong password",
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
