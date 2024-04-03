import React from "react";
import { Story, Meta } from "@storybook/react";
import Dialog from "./Dialog";
import ModalMeta from './Modal.stories'

export default {
  component: Dialog,
  title: "Molecules/Dialog",
  argTypes: {
    ...ModalMeta.argTypes,
    title: {control: "text"},
    description: {control: "text"},
    image: {control: "text"},
    okButton: {control: "text"},
    cancelButton: {control: "text"},
    onOk: {action: "ok"},
    onCancel: {action: "cancel"},
  },
} as Meta;

const Template: Story = (args) => <Dialog container={document.getElementById('root')} {...args}></Dialog>;

export const Default = Template.bind({});
Default.args = {
  isOpened: true,
  closeIcon: true,
  title: "¿Estás seguro que quieres continuar?",
  description: "Después de este paso crearás tu cuenta y no podrás cambiar de correo, aunque sí de contraseña",
  okButton: "Continue",
};

export const TwoButtons = Template.bind({});
TwoButtons.args = {
  isOpened: true,
  closeIcon: true,
  title: "¿Estás seguro que quieres continuar?",
  description: "Después de este paso crearás tu cuenta y no podrás cambiar de correo, aunque sí de contraseña",
  okButton: "Continue",
  cancelButton: "Cancel",
};


export const WithoutCloseIcon = Template.bind({});
WithoutCloseIcon.args = {
  isOpened: true,
  title: "¿Estás seguro que quieres continuar?",
  description: "Después de este paso crearás tu cuenta y no podrás cambiar de correo, aunque sí de contraseña",
  okButton: "Continue",
};

export const WithImage = Template.bind({});
WithImage.args = {
  closeIcon: true,
  isOpened: true,
  title: "¿Estás seguro que quieres continuar?",
  description: "Después de este paso crearás tu cuenta y no podrás cambiar de correo, aunque sí de contraseña",
  image: "https://www.kleanpro.com.do/wp-content/uploads/2013/11/dummy-image-landscape.jpg",
  okButton: "Continue",
};