import { styled } from "@storybook/theming";
import React from "react";
import { Button } from "..";
import { TertiaryButton } from "../Button";
import Modal, { ModalProps } from "./Modal";

export interface Props extends ModalProps {
  title?: string;
  description?: string;
  image?: string;
  closeIcon?: boolean;
  okButton?: string;
  cancelButton?: string;
  onOk?: () => void;
  onCancel?: () => void;
}

const Dialog = ({
  title,
  description,
  image,
  okButton,
  cancelButton,
  onOk,
  onCancel,
  ...restProps
}: Props) => {
  const modifier = okButton && cancelButton ? "small" : undefined;
  return (
    <Modal {...restProps}>
      <Container>
        {image && <Image src={image} alt={title} />}
        {title && <h4>{title}</h4>}
        {description && <p>{description}</p>}
        <Buttons>
          {cancelButton && (
            <TertiaryButton onClick={onCancel} modifiers={modifier}>{cancelButton}</TertiaryButton>
          )}
          {okButton && <Button onClick={onOk} modifiers={modifier}>{okButton}</Button>}
        </Buttons>
      </Container>
    </Modal>
  );
};
export default Dialog;

const Container = styled.div`
  text-align: center;

  h4 {
    margin: 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2rem;
`;
const Image = styled.img`
  width: 100%;
  max-width: 400px;
`;
