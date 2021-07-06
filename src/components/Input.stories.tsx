import React from "react";
import { Story, Meta } from '@storybook/react';

import Input, { InputProps, INPUT_TYPES, INPUT_MODIFIERS } from "./Input";

export default {
  component: Input,
  title: "Atoms/Input",
  argTypes: {
    type: {
      options: INPUT_TYPES,
      control: { type: "select" },
    },
    modifiers: {
      options: Object.keys(INPUT_MODIFIERS),
      control: { type: "check" }
    }
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  placeholder: "Placeholder"
};

export const TextWithLabel = Template.bind({});
TextWithLabel.args = {
  ...Text.args,
  modifiers: "label",
  label: "Título"
};

export const TextWithIcon = Template.bind({});
TextWithIcon.args = {
  ...Text.args,
  modifiers: "icon",
  icon: "arrow-right"
};
