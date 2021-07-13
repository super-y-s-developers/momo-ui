import React from "react";
import { Story, Meta } from "@storybook/react";

import Input, { InputProps, INPUT_TYPES, INPUT_MODIFIERS } from "./Input";

export default {
  component: Input,
  title: "Atoms/Input",
  argTypes: {
    type: {
      options: Object.keys(INPUT_TYPES),
      control: { type: "select" },
    },
    modifiers: {
      options: Object.keys(INPUT_MODIFIERS),
      control: { type: "check" },
    },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Placeholder goes here",
  type: "text",
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
    "8 characters with at least one: lowercase and uppercase letter, number, and special character",
};

export const Select = Template.bind({});
Select.args = {
  ...Default.args,
  type: "select",
};

export const TextArea = Template.bind({});
TextArea.args = {
  ...Default.args,
  type: "textarea",
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  ...Default.args,
  type: "checkbox",
};

export const Radio = Template.bind({});
Radio.args = {
  ...Default.args,
  type: "radio",
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args,
  modifiers: "warning",
  value: "Hello world",
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  modifiers: "error",
  value: "Hello world",
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  modifiers: "success",
  value: "Hello world",
};
