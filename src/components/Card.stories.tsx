import React from 'react';
import Card, { CardProps } from "./Card";
import { Meta, Story } from "@storybook/react";

export default {
  component: Card,
  title: "Atoms/Card",
  argTypes: {
    padding: { type: "number" },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} >Default Card</Card>;

export const Default = Template.bind({});
