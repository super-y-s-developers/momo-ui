import React from "react";
import { Story, Meta } from '@storybook/react';

import Button, {
  SecondaryButton,
  TertiaryButton,
  ButtonProps,
  BUTTON_MODIFIERS,
} from "./Button";

export default {
  component: Button,
  title: "Atoms/Button",
  argTypes: {
    modifiers: {
      options: Object.keys(BUTTON_MODIFIERS),
      control: { type: "check" },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Hello</Button>;
const TemplateSecondary: Story<ButtonProps> = (args) => <SecondaryButton {...args}>Hello</SecondaryButton>;
const TemplateTertiary: Story<ButtonProps> = (args) => <TertiaryButton {...args}>Hello</TertiaryButton>;

export const Default = Template.bind({});

export const Secondary = TemplateSecondary.bind({});

export const Tertiary = TemplateTertiary.bind({});

export const Large = Template.bind({});
Large.args = {
  modifiers: "large"
};

export const Small = Template.bind({});
Small.args = {
  modifiers: "small"
};

export const Icon = Template.bind({});
Icon.args = {
  modifiers: "icon"
};

export const LabelledIcon = Template.bind({});
LabelledIcon.args = {
  modifiers: "labelled-icon"
};

export const Warning = Template.bind({});
Warning.args = {
  modifiers: "warning"
};

export const WarningSecondary = TemplateSecondary.bind({});
WarningSecondary.args = {
  modifiers: "warningSecondary"
};

export const WarningTertiary = TemplateTertiary.bind({});
WarningTertiary.args = {
  modifiers: "warningTertiary"
};

export const Error = Template.bind({});
Error.args = {
  modifiers: "error"
};

export const ErrorSecondary = TemplateSecondary.bind({});
ErrorSecondary.args = {
  modifiers: "errorSecondary"
};

export const ErrorTertiary = TemplateTertiary.bind({});
ErrorTertiary.args = {
  modifiers: "errorTertiary"
};

export const Success = Template.bind({});
Success.args = {
  modifiers: "success"
};

export const SuccessSecondary = TemplateSecondary.bind({});
SuccessSecondary.args = {
  modifiers: "successSecondary"
};

export const SuccessTertiary = TemplateTertiary.bind({});
SuccessTertiary.args = {
  modifiers: "successTertiary"
};
