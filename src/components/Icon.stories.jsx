import React from "react";
import { Story, Meta } from "@storybook/react";
import * as Icon from "phosphor-react";

export default {
  component: Icon,
  title: "Atoms/Icon",
  argTypes: {
    weight: {
      options: ["thin", "light", "regular", "bold", "fill", "duotone"],
      control: { type: "radio" },
    },
    size: {
      control: { type: "range", min: 16, max: 64, step: 8 },
    },
    color: {
      control: { type: "color" },
    },
  },
};

const Template = (args) => <Icon.Horse {...args} />;

export const Default = Template.bind({});
Default.args = {
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

export const Duotone = Template.bind({});
Duotone.args = {
  ...Default.args,
  weight: "duotone",
};
