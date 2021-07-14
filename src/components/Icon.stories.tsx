import React from "react";
import { Story, Meta } from "@storybook/react";
import Icon, { IconProps, ICON_WEIGHTS } from "./Icon";

export default {
  component: Icon,
  title: "Atoms/Icon",
  argTypes: {
    weight: {
      options: ICON_WEIGHTS,
      control: { type: "radio" },
    },
    size: {
      control: { type: "range", min: 16, max: 64, step: 8 },
    },
    color: {
      control: { type: "color" },
    },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "horse",
  size: 64,
  weight: "regular",
};

export const Fill = Template.bind({});
Fill.args = {
  ...Default.args,
  weight: "fill",
};

export const Light = Template.bind({});
Light.args = {
  ...Default.args,
  weight: "light",
};

export const Thin = Template.bind({});
Thin.args = {
  ...Default.args,
  weight: "thin",
};

export const Bold = Template.bind({});
Bold.args = {
  ...Default.args,
  weight: "bold",
};
