import React from "react";
import { Story, Meta } from "@storybook/react";
import Modal, { ModalProps, MODAL_MODIFIERS } from "./Modal";

export default {
  component: Modal,
  title: "Molecules/Modal",
  argTypes: {
    isOpened: {
      control: { type: "boolean" },
    },
    closeIcon: {
      control: { type: "boolean" },
    },
    onClose: {
      action: "clicked",
    },
    onBackdropClick: {
      action: "clicked",
    },
    modifiers: {
      options: Object.keys(MODAL_MODIFIERS),
      control: { type: "check" },
    },
  },
} as Meta;

const Template: Story<ModalProps> = (args) => {
  return (
    <Modal container={document.getElementById("root")} {...args}>
      <h1>Example Modal</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
        doloribus!
      </p>
    </Modal>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpened: true,
  closeIcon: true,
};
