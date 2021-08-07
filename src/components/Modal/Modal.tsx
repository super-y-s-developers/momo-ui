import React, { HTMLProps } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { neutral } from "../../utils";
import Icon from "../Icon";

type Modifiers = Modifier<typeof MODAL_MODIFIERS>;

export interface ModalProps extends HTMLProps<HTMLElement> {
  isOpened?: boolean;
  closeIcon?: boolean;
  onClose?: () => void;
  onBackdropClick?: () => void;
  modifiers?: Modifiers;
  container?: HTMLElement | null;
}

export default function Modal({
  isOpened,
  closeIcon,
  onClose,
  onBackdropClick,
  modifiers,
  children,
  container,
}: ModalProps) {
  if (isOpened) {
    return ReactDOM.createPortal(
      <>
        <Shadow onClick={onBackdropClick} />
        <StyledModal role="dialog" modifiers={modifiers} closeIcon={closeIcon}>
          {closeIcon ? (
            <CloseIcon onClick={onClose}>
              <Icon icon="x" size={22} weight="bold" />
            </CloseIcon>
          ) : null}
          {children}
        </StyledModal>
      </>,
      container || document.body
    );
  } else {
    return null;
  }
}

export const MODAL_MODIFIERS = {
  big: ({ theme }: { theme: any }) => `
    max-width: ${theme.breakpoints.lg};
  `,
};

type StyledModalProps = {
  modifiers: Modifiers;
  closeIcon?: boolean;
};

const StyledModal = styled.div<StyledModalProps>`
  min-height: 5em;
  position: absolute;
  z-index: 20;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 46px 26px;
  padding-top: ${(props) => (props.closeIcon ? "62px" : "46px")};
  width: calc(100% - 3em);
  background: ${(props) => props.theme.backgroundColor};
  border-radius: 10px;
  box-shadow: 4px 5px 16px rgba(0, 0, 0, 0.2);
  max-width: ${(props) => props.theme.breakpoints.sm};

  ${applyStyleModifiers(MODAL_MODIFIERS)}
`;

const Shadow = styled.div`
  background: black;
  opacity: 0.2;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const CloseIcon = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 62px;
  height: 62px;
  background: none;
  border: none;
  color: ${neutral[600]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
