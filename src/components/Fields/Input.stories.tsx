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
    iconPos: {
      control: {
        options: ["left", "right"],
        type: "radio",
      },
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

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  ...Default.args,
  icon: "magnifying-glass",
  placeholder: "Search for your dream",
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  ...Default.args,
  icon: "lock-key",
  iconPos: "right",
  placeholder: "Set a good password",
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
